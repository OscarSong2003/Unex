import db from "../../db";
import { Schema } from "mongoose";
import { ScholarshipEntryDTO, ScholarshipIncDTO } from "../../types/Income/Scholarship";

const ScholarshipEntrySchema = new Schema<ScholarshipEntryDTO>({
    amount: {type: Number, required: true},
    date: {type: Date, required: false}
});

export const ScholarshipEntry = db.model<ScholarshipEntryDTO>("ScholarshipEntry", ScholarshipEntrySchema);

const ScholarshipIncomeSchema = new Schema<ScholarshipIncDTO>({
    total: {type: Number, default: 0},
    scholarshipEntries: [{type: Schema.Types.ObjectId, ref: "ScholarshipEntry"}]
});

export const ScholarshipIncome = db.model<ScholarshipIncDTO>("ScholarshipIncome", ScholarshipIncomeSchema);