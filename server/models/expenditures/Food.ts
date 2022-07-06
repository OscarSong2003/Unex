import db from "../../db";
import { Schema } from "mongoose";
import { FoodExpDTO } from "../../types/FoodExp";


const FoodExpenditureSchema = new Schema<FoodExpDTO>({
    total: {type: Number, default: 0},
    foodEntries: [{type: Schema.Types.ObjectId, ref: "ExpenditureEntry"}]
});

export const FoodExpenditure = db.model<FoodExpDTO>("FoodExpenditure", FoodExpenditureSchema);