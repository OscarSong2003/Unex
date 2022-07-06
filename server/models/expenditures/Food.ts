import db from "../../db";
import { Schema } from "mongoose";
import { FoodExpDTO } from "../../types/FoodExp";


const FoodExpenditureSchema = new Schema<FoodExpDTO>({
    _id: Schema.Types.ObjectId,
    total: {type: Number, default: 0, required: true},
    foodEntries: [{type: Schema.Types.ObjectId, ref: "ExpenditureEntry"}]
});

export const FoodExpenditure = db.model<FoodExpDTO>("FoodExpenditure", FoodExpenditureSchema);