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
import { IncomeEntry } from "../models/incomes/IncEntry";
import { FamilyIncome } from "../models/incomes/Family";
import { JobIncome } from "../models/incomes/Job";
import { FriendIncome } from "../models/incomes/Friend";
import { ScholarshipIncome } from "../models/incomes/Scholarship";
import { OtherIncome } from "../models/incomes/Other";
import { ObjectId } from "mongoose";

const router = express.Router();

router.post('/income', async function(req: Request, res: Response, next: NextFunction) {
    const { email, date, amount, category, name } = req.body;
   
    let userId; 
    const user = await User.findOne({email: email});
    if (!user) {
        res.send('user not found')
    } else {
        userId = user._id;
    } 
    
    const entry = new IncomeEntry({_id: new mongoose.Types.ObjectId(), name: name, category: category, amount: amount, date: date, userId: userId});
    await entry.save((err: any, createdEntry) => {
        console.log('email', email);
        console.log('date', date);
        console.log('amount', amount);
        console.log('category: ', category);
        switch (category) {
            case "family": {
                 User.findOne({ email: email }, 'familyInc', (err: any, user: any) => {
                    // add createdEntry's id to array of tuition expenditure ids of current user
                    FamilyIncome.findByIdAndUpdate(user.familyInc._id, { $push: { familyEntries: createdEntry._id }, $inc: {total: amount} }, 
                       { new: true }).then((exp: any) => {console.log("success")}).catch((err: any) => { console.log(err); });
                }) 
                break; 
            }
            case "job": {
                 User.findOne({ email: email }, 'jobInc', (err: any, user: any) => {
                    // add createdEntry's id to array of tuition expenditure ids of current user
                    JobIncome.findByIdAndUpdate(user.jobInc._id, { $push: { jobEntries: createdEntry._id }, $inc: {total: amount} }, 
                       { new: true }).then((exp: any) => {console.log("success")}).catch((err: any) => { console.log(err); });
               }) 
               break; 
            }
            case "friend": {
                 User.findOne({ email: email }, 'friendInc', (err: any, user: any) => {
                    // add createdEntry's id to array of tuition expenditure ids of current user
                    FriendIncome.findByIdAndUpdate(user.friendInc._id, { $push: { friendEntries: createdEntry._id }, $inc: {total: amount} }, 
                       { new: true }).then((exp: any) => {console.log("success")}).catch((err: any) => { console.log(err); });
               }) 
            }
            case "scholarship": {
                 User.findOne({ email: email }, 'scholarshipInc', (err: any, user: any) => {
                    // add createdEntry's id to array of tuition expenditure ids of current user
                    ScholarshipIncome.findByIdAndUpdate(user.scholarshipInc._id, { $push: { scholarshipEntries: createdEntry._id }, $inc: {total: amount} }, 
                       { new: true }).then((exp: any) => {console.log("success")}).catch((err: any) => { console.log(err); });
               }) 
               break; 
            }
            case "other": {
                 User.findOne({ email: email }, 'otherInc', (err: any, user: any) => {
                    // add createdEntry's id to array of tuition expenditure ids of current user
                    OtherIncome.findByIdAndUpdate(user.otherInc._id, { $push: {otherEntries: createdEntry._id }, $inc: {total: amount} }, 
                       { new: true }).then((exp: any) => {console.log("success")}).catch((err: any) => { console.log(err); });
               }) 
               break; 
            }
        }
    })
    // update total
    User.findOneAndUpdate({ email: email }, { $inc: { amountAvailable: amount} }, { new: true }).then((user: any) => {
        console.log("successfully incremented");
    }).catch((err: any) => { console.log(err); });
    res.send("success");
});

router.post('/expense', async function(req: Request, res: Response, next: NextFunction) { 
    const { email, date, amount, category, name} = req.body;
    
    let userId; 
    const user = await User.findOne({email: email});
    if (!user) {
        res.send('user not found')
    } else {
        userId = user._id;
    } 

    const entry = new ExpenditureEntry({_id: new mongoose.Types.ObjectId(), name: name, category: category, amount: amount, date: date, userId: userId});
    await entry.save((err: any, createdEntry) => {
        // find current user  
        console.log('email', email);
        console.log('date', date);
        console.log('amount', amount);
        console.log('category:', category);
        console.log('name:', name);
        // insert object id into user's expenditure type array
        
        switch (category) {
            case "tuition": {
                // find user's tuition expenditure's id 
                User.findOne({ email: email}, 'tuitionExp', (err: any, user: any) => {
                     // add createdEntry's id to array of tuition expenditure ids of current user
                     TuitionExpenditure.findByIdAndUpdate(user.tuitionExp._id, { $push: { tuitionEntries: createdEntry._id }, $inc: {total: amount} }, 
                        { new: true }).then((exp: any) => {console.log("success")}).catch((err: any) => { console.log(err); });
                }) 
                break; 
            }
            case "grocery": {
                User.findOne({ email: email }, 'groceryExp', (err: any, user: any) => {
                    // add createdEntry's id to array of tuition expenditure ids of current user
                    GroceryExpenditure.findByIdAndUpdate(user.groceryExp._id, { $push: { groceryEntries: createdEntry._id }, $inc: {total: amount} }, 
                       { new: true }).then((exp: any) => {console.log("success")}).catch((err: any) => { console.log(err); });
               }) 
               break; 
            }
            case "food": {
                User.findOne({ email: email }, 'foodExp', (err: any, user: any) => {
                    // add createdEntry's id to array of tuition expenditure ids of current user
                    FoodExpenditure.findByIdAndUpdate(user.foodExp._id, { $push: { foodEntries: createdEntry._id }, $inc: {total: amount} }, 
                       { new: true }).then((exp: any) => {console.log("success")}).catch((err: any) => { console.log(err); });
               }) 
            }
            case "tech": {
                User.findOne({ email: email }, 'techExp', (err: any, user: any) => {
                    // add createdEntry's id to array of tuition expenditure ids of current user
                    TechExpenditure.findByIdAndUpdate(user.techExp._id, { $push: { techEntries: createdEntry._id }, $inc: {total: amount} }, 
                       { new: true }).then((exp: any) => {console.log("success")}).catch((err: any) => { console.log(err); });
               }) 
               break; 
            }
            case "fun": {
                User.findOne({ email: email }, 'funExp', (err: any, user: any) => {
                    // add createdEntry's id to array of tuition expenditure ids of current user
                    FunExpenditure.findByIdAndUpdate(user.funExp._id, { $push: { funEntries: createdEntry._id }, $inc: {total: amount} }, 
                       { new: true }).then((exp: any) => {console.log("success")}).catch((err: any) => { console.log(err); });
               }) 
               break; 
            }
            case "other": {
                User.findOne({ email: email }, 'otherExp', (err: any, user: any) => {
                    // add createdEntry's id to array of tuition expenditure ids of current user
                    OtherExpenditure.findByIdAndUpdate(user.otherExp._id, { $push: { otherEntries: createdEntry._id }, $inc: {total: amount} }, 
                       { new: true }).then((exp: any) => {console.log("success")}).catch((err: any) => { console.log(err); });
               }) 
               break; 
            }
        }
    }); 

    const decAmount = amount * -1; 
    // update user's summary
    User.findOneAndUpdate({ email: email }, { $inc: { amountSpent: amount, amountAvailable: decAmount } }, { new: true }).then((user: any) => {
        console.log("successfully decremented");
    }).catch((err: any) => { console.log(err); });
    res.send("success");
});


module.exports = router; 