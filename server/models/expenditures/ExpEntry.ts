import db from "../../db";
import { Schema } from "mongoose";
import { ExpEntryDTO } from "../../types/ExpEntry";
import { ExpenditureCategories } from "../../types/enums";

const ExpenditureEntrySchema = new Schema<ExpEntryDTO>({ 
    _id: Schema.Types.ObjectId,
    name: { type: String, required: true },
    category: { 
        type: String,
        enum: ExpenditureCategories,
        required: true
    },
    amount: {type: Number, required: true, default: 0},
    date: {type: Date, required: false},
    userId: {type: Schema.Types.ObjectId, ref: "User"}
});

export const ExpenditureEntry = db.model<ExpEntryDTO>("ExpenditureEntry", ExpenditureEntrySchema);
