import db from "../../db";
import { Schema } from "mongoose";
import { JobIncDTO} from "../../types/Income/Job";

// const JobEntrySchema = new Schema<JobEntryDTO>({
//     amount: {type: Number, required: true},
//     date: {type: Date, required: false}
// });

// export const JobEntry = db.model<JobEntryDTO>("JobEntry", JobEntrySchema);

const JobIncomeSchema = new Schema<JobIncDTO>({
    total: {type: Number, default: 0},
    jobEntries: [{type: Schema.Types.ObjectId, ref: "IncomeEntry"}]
});

export const JobIncome = db.model<JobIncDTO>("JobIncome", JobIncomeSchema);

