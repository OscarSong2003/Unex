import { Schema } from "mongoose";
import db from "../../db";
import { TuitionExpDTO } from "../../types/TuitionExp";

// const TuitionEntrySchema = new Schema<TuitionEntryDTO>({ 
//     amount: {type: Number, required: true},
//     date: {type: Date, required: false}
// });

// export const TuitionEntry = db.model<TuitionEntryDTO>("TuitionEntry", TuitionEntrySchema);

const TuitionExpenditureSchema = new Schema<TuitionExpDTO>({
    _id: Schema.Types.ObjectId,
    total: {type: Number, default: 0, required: true},
    tuitionEntries: [{type: Schema.Types.ObjectId, ref: "ExpenditureEntry"}]
});

export const TuitionExpenditure = db.model<TuitionExpDTO>("TuitionExpenditure", TuitionExpenditureSchema);

// export type TuitionDTO = {
//     total: number,
//     tuitions: [ObjectId]
// }