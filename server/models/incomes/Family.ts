import db from "../../db";
import { Schema } from "mongoose";
import { FamilyEntryDTO, FamilyIncDTO } from "../../types/Income/Family";

const FamilyEntrySchema = new Schema<FamilyEntryDTO>({
    amount: {type: Number, required: true},
    date: {type: Date, required: false}
});

export const FamilyEntry = db.model<FamilyEntryDTO>("FamilyEntry", FamilyEntrySchema);

const FamilyIncomeSchema = new Schema<FamilyIncDTO>({
    total: {type: Number, default: 0},
    familyEntries: [{type: Schema.Types.ObjectId, ref: "FamilyEntry"}]
});

export const FamilyIncome = db.model<FamilyIncDTO>("FamilyIncome", FamilyIncomeSchema);
