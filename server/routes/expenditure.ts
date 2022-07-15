import express from "express";
import mongoose, { ObjectId } from "mongoose";
import { NextFunction, Request, Response } from "express";
import { ExpenditureEntry } from "../models/expenditures/ExpEntry";
import { TuitionExpenditure } from "../models/expenditures/Tuition";
import { GroceryExpenditure } from "../models/expenditures/Grocery";
import { FoodExpenditure } from "../models/expenditures/Food";
import { TechExpenditure } from "../models/expenditures/Tech";
import { FunExpenditure } from "../models/expenditures/Fun";
import { OtherExpenditure } from "../models/expenditures/Other";
import { User } from "../models/User";

const router = express.Router(); 

router.delete('/delete/:id', async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    // remove expenditure
    const exp = await ExpenditureEntry.findById(id);
    const convertedId = exp?._id;
    let userId; 
    let category;
    let amount; 
    if (exp) {
        category = exp.category;
        amount = exp.amount;
        userId = exp.userId;
    }
    console.log('category', category);
    console.log('amount', amount);
    
    switch (category) {
        case "tuition": {
            const user = await User.findById(userId).populate('tuitionExp');
            let expId; 
            if (user) expId = user.tuitionExp._id;
            await TuitionExpenditure.findByIdAndUpdate(expId, { $pull: { tuitionEntries: convertedId}, $inc: {total: amount ? -1 * amount: 0} })
            break;
        }
        case "grocery": {
            const user = await User.findById(userId).populate('groceryExp');
            let expId; 
            if (user) expId = user.groceryExp._id;
            await GroceryExpenditure.findByIdAndUpdate(expId, { $pull: { groceryEntries: convertedId }, $inc: {total: amount ? -amount: 0} })
            break;
        }
        case "food": {
            const user = await User.findById(userId).populate('foodExp');
            let expId; 
            if (user) expId = user.foodExp._id;
            await FoodExpenditure.findByIdAndUpdate(expId, { $pull: { foodEntries: convertedId }, $inc: {total: amount ? -amount: 0} })
            break;
        }
        case "tech": {
            const user = await User.findById(userId).populate('techExp');
            let expId; 
            if (user) expId = user.techExp._id;
            await TechExpenditure.findByIdAndUpdate(expId, { $pull: { techEntries: convertedId }, $inc: {total: amount ? -amount: 0} })
            break; 
        }
        case "fun": {
            const user = await User.findById(userId).populate('funExp');
            let expId;
            if (user) expId = user.funExp._id;
            await FunExpenditure.findByIdAndUpdate(expId, { $pull: { funEntries: convertedId }, $inc: {total: amount ? -amount: 0} })
            break;
        }
        case "other": {
            const user = await User.findById(userId).populate('otherExp');
            let expId;
            if (user) expId = user.otherExp._id;
            await OtherExpenditure.findByIdAndUpdate(expId, { $pull: { otherEntries: convertedId }, $inc: {total: amount ? -amount: 0} })
            break;
        }
    }

    await User.findByIdAndUpdate(userId, {$inc: {amountSpent: amount ? -amount: 0, amountAvailable: amount ? amount: 0}}); 
    ExpenditureEntry.findByIdAndDelete(id, (err: any, doc: any) => {
        console.log('success');
    })
})

type AllExpenditureRequestDTO = {
    _id: ObjectId,
    name: string,
    category: string,
    amount: number,
    date: Date,
}

router.get('/all', async function(req: Request, res: Response, next: NextFunction) {
    const { email: userEmail } = req.query;
    let entries: AllExpenditureRequestDTO[] = [];
    const user = await User.findOne({email: userEmail});
    const id = user?._id;

    const exps = await ExpenditureEntry.find({userId: id}); 
    exps.forEach((exp: any) => {
        entries.push(
            {
                _id: exp._id,
                name: exp.name,
                category: exp.category,
                amount: exp.amount,
                date: exp.date,
            }
        )
    })

    const result = entries.sort((a: any, b: any) => a.date - b.date); 
    res.send(result);
})

type ExpRequestDTO = {
    email: string, 
    category: string, 
    numReturn: number
}

router.get('/byCategory', async function(req: Request, res: Response, next: NextFunction) {
    const { email: userEmail, category } = req.query;
    console.log('category', category);
    let entries = [];
    let total = 0;

    switch (category) {
        case "Tuition": {
            const user: any = await User.findOne({email: userEmail}).populate('tuitionExp');
            total = user.tuitionExp.total;
            // put in total
            for (let i of user.tuitionExp.tuitionEntries) {
                const exp = await ExpenditureEntry.findById(i);
                if (exp)
                    entries.push({name: exp.name, amount: exp.amount, date: exp.date});
            }
            break;
        }

        case "Groceries": {
            const user: any = await User.findOne({email: userEmail}).populate('groceryExp');
            total = user.groceryExp.total;
            for (let i of user.groceryExp.groceryEntries) {
                const exp = await ExpenditureEntry.findById(i);
                if (exp)
                    entries.push({name: exp.name, amount: exp.amount, date: exp.date});
            }
            break;
        }

        case "Food": {

            const user: any = await User.findOne({email: userEmail}).populate('foodExp');
            total = user.foodExp.total;
            for (let i of user.foodExp.foodEntries) {
                const exp = await ExpenditureEntry.findById(i);
                if (exp)
                    entries.push({name: exp.name, amount: exp.amount, date: exp.date});
            }
            break;
        }

        case "Tech": {
            const user: any = await User.findOne({email: userEmail}).populate('techExp');
            total = user.techExp.total;
            for (let i of user.techExp.techEntries) {
                const exp = await ExpenditureEntry.findById(i);
                if (exp)
                    entries.push({name: exp.name, amount: exp.amount, date: exp.date});
            }
            break;
        }

        case "Fun": {
            const user:any = await User.findOne({email: userEmail}).populate('funExp');
            total = user.funExp.total;
            for (let i of user.funExp.funEntries) {
                const exp = await ExpenditureEntry.findById(i);
                if (exp)
                    entries.push({name: exp.name, amount: exp.amount, date: exp.date});
            }
            break;
        }

        case "Other": {
            const user: any = await User.findOne({email: userEmail}).populate('otherExp');
            total = user.otherExp.total;
            for (let i of user.otherExp.otherEntries) {
                const exp = await ExpenditureEntry.findById(i);
                if (exp)
                    entries.push({name: exp.name, amount: exp.amount, date: exp.date});
            }
            break;
        }
    }
    const sortedEntries = entries.sort((a, b) => b.amount - a.amount); // short by amount
    console.log('sorted entries:', sortedEntries)
    console.log('got here')
    res.send({total: total, entries: sortedEntries});
})

module.exports = router; 