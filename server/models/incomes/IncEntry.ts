import db from "../../db";
import { Schema } from "mongoose";
import { IncEntryDTO } from "../../types/Income/IncEntry";

const IncomeEntrySchema = new Schema<IncEntryDTO>({ 
    _id: Schema.Types.ObjectId,
    amount: {type: Number, required: true},
    date: {type: Date, required: false}
});

export const IncomeEntry = db.model<IncEntryDTO>("IncomeEntry", IncomeEntrySchema);
