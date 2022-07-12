import express from "express";
import mongoose from "mongoose";
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