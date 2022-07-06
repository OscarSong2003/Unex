import db from "../../db";
import { Schema } from "mongoose";
import { ExpEntryDTO } from "../../types/ExpEntry";

const ExpenditureEntrySchema = new Schema<ExpEntryDTO>({ 
    amount: {type: Number, required: true},
    date: {type: Date, required: false}
});

export const ExpenditureEntry = db.model<ExpEntryDTO>("ExpenditureEntry", ExpenditureEntrySchema);
