import express from "express";
import { NextFunction, Request, Response } from "express";
import { ExpenditureEntry } from "../models/expenditures/ExpEntry";

const router = express.Router();

router.post('/expense', async function(req: Request, res: Response, next: NextFunction) { 
    const { date, amount, category } = req.body;
    const entry = new ExpenditureEntry({amount: amount, date: date});
    await entry.save((err: any, createdEntry) => {
        
    }); 
});


module.exports = router; 