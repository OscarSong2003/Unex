import db from "../../db";
import { Schema } from "mongoose";
import { ExpEntryDTO } from "../../types/ExpEntry";

const ExpenditureEntrySchema = new Schema<ExpEntryDTO>({ 
    _id: Schema.Types.ObjectId,
    amount: {type: Number, required: true, default: 0},
    date: {type: Date, required: false}
});

export const ExpenditureEntry = db.model<ExpEntryDTO>("ExpenditureEntry", ExpenditureEntrySchema);
