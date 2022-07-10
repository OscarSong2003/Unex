import express, { application } from "express";
const router = express.Router();
import { NextFunction, Request, Response } from "express";
import { User } from "../models/User";
import { TuitionExpenditure } from "../models/expenditures/Tuition";
import { UserDTO } from "../types/User";
import { OverviewResponseDTO } from "../types/OverviewResponse";
import { GroceryExpenditure } from "../models/expenditures/Grocery";
import { FoodExpenditure } from "../models/expenditures/Food";
import { TechExpenditure } from "../models/expenditures/Tech";
import { FunExpenditure } from "../models/expenditures/Fun";
import { OtherExpenditure } from "../models/expenditures/Other";
import { FamilyIncome } from "../models/incomes/Family";
import { JobIncome } from "../models/incomes/Job";
import { FriendIncome } from "../models/incomes/Friend";
import { ScholarshipIncome } from "../models/incomes/Scholarship";
import { OtherIncome } from "../models/incomes/Other";
import mongoose, { Schema } from "mongoose";

/* GET users listing. */

// check to make sure the user exists
router.post('/check', async function(req: Request, res: Response, next: NextFunction) {
  const userEmail = req.body.email; 
  const userExists = await User.exists({ email: userEmail });
  if (!userExists) {
    // create expenditures
    const tuition = new TuitionExpenditure({ _id: new mongoose.Types.ObjectId(), tuitionEntries: [] });
    await tuition.save(); 
    
    const grocery = new GroceryExpenditure({ _id: new mongoose.Types.ObjectId(), groceryEntries: [] });
    await grocery.save();

    const food = new FoodExpenditure({ _id: new mongoose.Types.ObjectId(), foodEntries: [] });
    await food.save(); 
    
    const tech = new TechExpenditure({ _id: new mongoose.Types.ObjectId(), techEntries: [] });
    await tech.save();

    const fun = new FunExpenditure({ _id: new mongoose.Types.ObjectId(), funEntries: [] });
    await fun.save();

    const otherExp = new OtherExpenditure({ _id: new mongoose.Types.ObjectId(), otherEntries: [] });
    await otherExp.save();

    // create incomes
    const family = new FamilyIncome({ _id: new mongoose.Types.ObjectId(), familyEntries: [] });
    await family.save();

    const job = new JobIncome({ _id: new mongoose.Types.ObjectId(), jobEntries: [] });
    await job.save();
    
    const friend = new FriendIncome({ _id: new mongoose.Types.ObjectId(), friendEntries: [] });
    await friend.save();

    const scholarship = new ScholarshipIncome({ _id: new mongoose.Types.ObjectId(), scholarshipEntries: [] });
    await scholarship.save();

    const otherInc = new OtherIncome({ _id: new mongoose.Types.ObjectId(), otherEntries: [] });
    await otherInc.save();

    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      email: userEmail,
      tuitionExp: tuition._id,
      groceryExp: grocery._id,
      foodExp: food._id,
      techExp: tech._id,
      funExp: fun._id,
      otherExp: otherExp._id,
      familyInc: family._id,
      jobInc: job._id,
      friendInc: friend._id,
      scholarshipInc: scholarship._id,
      otherInc: otherInc._id
    });

    user.save((err: any, createdUser) => {
      if (err) {
        console.log(err);
        res.send('error');
      } else {
        console.log("user created");
        res.send({_id: createdUser._id});
      }
    })
  } else {
    res.send('user exists');
  }
});

router.get('/overview', async function(req: Request, res: Response, next: NextFunction) {
    const { email: userEmail } = req.query; 
    const foundUser = await User.findOne({ email: userEmail });
    if (foundUser) {
      const response: OverviewResponseDTO = {
        amountAvailable: foundUser.amountAvailable,
        amountSpent: foundUser.amountSpent
      }
      console.log("got it!");
      res.send(response);
    }
}); 

router.get('/topSpendCat', async function(req: Request, res:Response, next:NextFunction) {
    const { email: userEmail } = req.query; 
    
    User.findOne({email: userEmail})
    .populate('tuitionExp')
    .populate('groceryExp')
    .populate('foodExp')
    .populate('techExp')
    .populate('funExp')
    .populate('otherExp')
    .exec((err:any, foundUser:any) => {
        const totSpend = foundUser.amountSpent;
        const allZero = totSpend == 0; 
        const exp = [];
        exp.push({name:'Tuition', val: foundUser.tuitionExp.total, percentage: allZero ? 0 : (foundUser.tuitionExp.total/totSpend) * 100});
        exp.push({name:'Groceries', val: foundUser.groceryExp.total, percentage: allZero ? 0 : (foundUser.groceryExp.total/totSpend) * 100});
        exp.push({name:'Food', val: foundUser.foodExp.total, percentage: allZero ? 0 : (foundUser.foodExp.total/totSpend) * 100});
        exp.push({name:'Tech', val: foundUser.techExp.total, percentage: allZero ? 0 : (foundUser.techExp.total/totSpend) * 100});
        exp.push({name:'Fun', val: foundUser.funExp.total, percentage: allZero ? 0 : (foundUser.funExp.total/totSpend) * 100});
        exp.push({name:'Other', val: foundUser.otherExp.total, percentage: allZero ? 0 : (foundUser.otherExp.total/totSpend) * 100});
        // descending order sort
        const sortedExp = exp.sort((a, b) => b.val - a.val);
        const result = sortedExp.slice(0, 4);  // only return the top 4
        res.send(result); 
    })
})
module.exports = router; 
