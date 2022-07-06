import db from "../../db";
import { Schema } from "mongoose";
import { JobIncDTO, JobEntryDTO } from "../../types/Income/Job";

const JobEntrySchema = new Schema<JobEntryDTO>({
    amount: {type: Number, required: true},
    date: {type: Date, required: false}
});

export const JobEntry = db.model<JobEntryDTO>("JobEntry", JobEntrySchema);

const JobIncomeSchema = new Schema<JobIncDTO>({
    total: {type: Number, default: 0},
    jobEntries: [{type: Schema.Types.ObjectId, ref: "JobEntry"}]
});

export const JobIncome = db.model<JobIncDTO>("JobIncome", JobIncomeSchema);

