import db from "../../db";
import { Schema } from "mongoose";
import { IncEntryDTO } from "../../types/Income/IncEntry";
import { IncomeCategories } from "../../types/Income/enums";

const IncomeEntrySchema = new Schema<IncEntryDTO>({ 
    _id: Schema.Types.ObjectId,
    name: {type: String, required: true},
    category: {
        type: String, 
        enum: IncomeCategories, 
        required: true 
    },
    amount: {type: Number, required: true},
    date: {type: Date, required: false},
    userId: {type: Schema.Types.ObjectId, ref: "User"}
});

export const IncomeEntry = db.model<IncEntryDTO>("IncomeEntry", IncomeEntrySchema);
