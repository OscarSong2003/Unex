import express from "express";
import mongoose, { ObjectId } from "mongoose"
import { Request, Response, NextFunction } from "express";
import { User } from "../models/User";
import { IncomeEntry } from "../models/incomes/IncEntry";
import { FamilyIncome } from "../models/incomes/Family";

const router = express.Router(); 

type AllIncomeRequestDTO = {
    _id: ObjectId,
    name: string,
    category: string,
    amount: number,
    date: Date,
}

router.get('/all', async function(req: Request, res: Response, next: NextFunction) {
    const { email: userEmail } = req.query;
    let entries: AllIncomeRequestDTO[] = [];
    const user = await User.findOne({email: userEmail});
    const id = user?._id;

    const exps = await IncomeEntry.find({userId: id}); 
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


router.delete('/delete/:id', async (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params;
    // remove expenditure
    const exp = await IncomeEntry.findById(id);
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
        case "family": {
            const user = await User.findById(userId).populate('familyInc'); 
            let incId; 
            if (user) incId = user.familyInc._id; 
            await FamilyIncome.findByIdAndUpdate(incId, { $pull: { familyEntries: convertedId}, $inc: {total: amount ? -1 * amount: 0} })
            break;
        }
        case "friend" : {
            const user = await User.findById(userId).populate('friendInc');
            let incId;
            if (user) incId = user.friendInc._id;
            await FamilyIncome.findByIdAndUpdate(incId, { $pull: { friendEntries: convertedId}, $inc: {total: amount ? -1 * amount: 0} })
            break; 
        }
        case "job" : {
            const user = await User.findById(userId).populate('jobInc');
            let incId;
            if (user) incId = user.jobInc._id;
            await FamilyIncome.findByIdAndUpdate(incId, { $pull: { jobEntries: convertedId}, $inc: {total: amount ? -1 * amount: 0} })
            break;
        }
        case "scholarship": {
            const user = await User.findById(userId).populate('scholarshipInc');
            let incId;
            if (user) incId = user.scholarshipInc._id;
            await FamilyIncome.findByIdAndUpdate(incId, { $pull: { scholarshipEntries: convertedId}, $inc: {total: amount ? -1 * amount: 0} })
            break; 
        }
        case "other": {
            const user = await User.findById(userId).populate('otherInc');
            let incId;
            if (user) incId = user.otherInc._id;
            await FamilyIncome.findByIdAndUpdate(incId, { $pull: { otherEntries: convertedId}, $inc: {total: amount ? -1 * amount: 0} })
            break; 
        }
    }

    await User.findByIdAndUpdate(userId, {$inc: {amountAvailable: amount ? -amount: 0}}); 
    IncomeEntry.findByIdAndDelete(id, (err: any, doc: any) => {
        console.log('success');
    })
})

module.exports = router; 