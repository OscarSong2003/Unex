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

router.post('/expense', async function(req: Request, res: Response, next: NextFunction) { 
    const { email, date, amount, category } = req.body;
    const entry = new ExpenditureEntry({_id: new mongoose.Types.ObjectId(), amount: amount, date: date});
    await entry.save((err: any, createdEntry) => {
        // find current user  
        let expId; 
        console.log('email', email);
        console.log('date', date);
        console.log('amount', amount);
        console.log('category: ', category);
        // insert object id into user's expenditure type array
        switch (category) {
            case "tuition": {
                // find user's tuition expenditure's id 
                User.findOne({ email: email }, 'tuitionExp', (err: any, user: any) => {
                     // add createdEntry's id to array of tuition expenditure ids of current user
                     TuitionExpenditure.findByIdAndUpdate(user.tuitionExp._id, { $push: { tuitionEntries: createdEntry._id }, $inc: {total: amount} }, 
                        { new: true }).then((exp: any) => {console.log("success")}).catch((err: any) => { console.log(err); });
                }) 
            }
            case "grocery": {
                User.findOne({ email: email }, 'groceryExp', (err: any, user: any) => {
                    // add createdEntry's id to array of tuition expenditure ids of current user
                    GroceryExpenditure.findByIdAndUpdate(user.groceryExp._id, { $push: { groceryEntries: createdEntry._id }, $inc: {total: amount} }, 
                       { new: true }).then((exp: any) => {console.log("success")}).catch((err: any) => { console.log(err); });
               }) 
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
            }
            case "fun": {
                User.findOne({ email: email }, 'funExp', (err: any, user: any) => {
                    // add createdEntry's id to array of tuition expenditure ids of current user
                    FunExpenditure.findByIdAndUpdate(user.funExp._id, { $push: { funEntries: createdEntry._id }, $inc: {total: amount} }, 
                       { new: true }).then((exp: any) => {console.log("success")}).catch((err: any) => { console.log(err); });
               }) 
            }
            case "other": {
                User.findOne({ email: email }, 'otherExp', (err: any, user: any) => {
                    // add createdEntry's id to array of tuition expenditure ids of current user
                    OtherExpenditure.findByIdAndUpdate(user.otherExp._id, { $push: { otherEntries: createdEntry._id }, $inc: {total: amount} }, 
                       { new: true }).then((exp: any) => {console.log("success")}).catch((err: any) => { console.log(err); });
               }) 
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