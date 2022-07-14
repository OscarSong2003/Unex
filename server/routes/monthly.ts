import express from "express";
import e, { Request, Response, NextFunction } from "express";
import { ExpenditureEntry } from "../models/expenditures/ExpEntry";
import { IncomeEntry } from "../models/incomes/IncEntry";
const router = express.Router();
import { User } from "../models/User";

router.get('/overview', async function(req: Request, res: Response, next: NextFunction) {
    const { email: userEmail } = req.query;
    // get userid
    const currDate = new Date(); 
    const compDate = new Date(currDate.getFullYear(), currDate.getMonth()); 
    let userId;
    let monthlyTotalSpending = 0; 
    const user = await User.findOne({email: userEmail});
    if (!user) {
        res.send('user not found')
    } else {
        userId = user._id;
    } 
    console.log('got here!')

    const expEntries = await ExpenditureEntry.find({userId: userId, date: {$gte: compDate}});
    for (let i of expEntries) {
        monthlyTotalSpending += i.amount;
    }

    let monthlyTotalIncome = 0;
    const incEntries = await IncomeEntry.find({userId: userId, date: {$gte: compDate}});
    for (let i of incEntries) {
        monthlyTotalIncome += i.amount;
    }
    const netTotal = monthlyTotalIncome - monthlyTotalSpending; 
    res.send({totalSpending: monthlyTotalSpending, totalIncome: monthlyTotalIncome, netTotal: netTotal});
});

router.get('/byExpCat', async function(req: Request, res: Response, next: NextFunction) {
    const { email: userEmail, category } = req.query;
    // make query to get this data 
    const currDate = new Date(); 
    const compDate = new Date(currDate.getFullYear(), currDate.getMonth()); 

    let userId;
    const user = await User.findOne({email: userEmail});
    if (!user) {
        res.send('user not found')
    } else {
        userId = user._id;
    } 
    const expEntries = await ExpenditureEntry.find({userId: userId, date: {$gte: compDate}, category: category});
    let result = [];
    for (let i of expEntries) {
        result.push({name: i.name, amount: i.amount, date: i.date});
    }
    res.send(result);
});

router.get('/byIncCat', async function(req: Request, res: Response, next: NextFunction) { 
    const { email: userEmail, category } = req.query;
    const currDate = new Date(); 
    const compDate = new Date(currDate.getFullYear(), currDate.getMonth()); 

    let userId;
    const user = await User.findOne({email: userEmail});
    if (!user) {
        res.send('user not found')
    } else {
        userId = user._id;
    } 
    const incEntries = await IncomeEntry.find({userId: userId, date: {$gte: compDate}, category: category});
    let result = [];
    for (let i of incEntries) {
        result.push({name: i.name, amount: i.amount, date: i.date});
    }
    res.send(result);
})

router.get('/topExp', async function(req: Request, res: Response, next: NextFunction) {
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
                if (exp && exp.date >= new Date(new Date().getFullYear(), new Date().getMonth())) 
                    entries.push({name: exp.name, amount: exp.amount, date: exp.date});
            }
            break;
        }

        case "Groceries": {
            const user: any = await User.findOne({email: userEmail}).populate('groceryExp');
            total = user.groceryExp.total;
            for (let i of user.groceryExp.groceryEntries) {
                const exp = await ExpenditureEntry.findById(i);
                if (exp && exp.date >= new Date(new Date().getFullYear(), new Date().getMonth())) 
                    entries.push({name: exp.name, amount: exp.amount, date: exp.date});
            }
            break;
        }

        case "Food": {

            const user: any = await User.findOne({email: userEmail}).populate('foodExp');
            total = user.foodExp.total;
            for (let i of user.foodExp.foodEntries) {
                const exp = await ExpenditureEntry.findById(i);
                if (exp && exp.date >= new Date(new Date().getFullYear(), new Date().getMonth())) 
                    entries.push({name: exp.name, amount: exp.amount, date: exp.date});
            }
            break;
        }

        case "Tech": {
            const user: any = await User.findOne({email: userEmail}).populate('techExp');
            total = user.techExp.total;
            for (let i of user.techExp.techEntries) {
                const exp = await ExpenditureEntry.findById(i);
                if (exp && exp.date >= new Date(new Date().getFullYear(), new Date().getMonth())) 
                    entries.push({name: exp.name, amount: exp.amount, date: exp.date});
            }
            break;
        }

        case "Fun": {
            const user:any = await User.findOne({email: userEmail}).populate('funExp');
            total = user.funExp.total;
            for (let i of user.funExp.funEntries) {
                const exp = await ExpenditureEntry.findById(i);
                if (exp && exp.date >= new Date(new Date().getFullYear(), new Date().getMonth())) 
                    entries.push({name: exp.name, amount: exp.amount, date: exp.date});
            }
            break;
        }

        case "Other": {
            const user: any = await User.findOne({email: userEmail}).populate('otherExp');
            total = user.otherExp.total;
            for (let i of user.otherExp.otherEntries) {
                const exp = await ExpenditureEntry.findById(i);
                if (exp && exp.date >= new Date(new Date().getFullYear(), new Date().getMonth())) 
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