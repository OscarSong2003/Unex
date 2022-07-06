import db from "../../db";
import { Schema } from "mongoose";
import { OtherExpDTO } from "../../types/OtherExp";

// const OtherExpEntrySchema = new Schema<OtherExpEntryDTO>({
//     amount: {type: Number, required: true},
//     date: {type: Date, required: false}
// });

// export const OtherEntry = db.model<OtherExpEntryDTO>("OtherExpEntry", OtherExpEntrySchema);

const OtherExpenditureSchema = new Schema<OtherExpDTO>({
    _id: Schema.Types.ObjectId,
    total: {type: Number, default: 0, required: true},
    otherEntries: [{type: Schema.Types.ObjectId, ref: "ExpenditureEntry"}]
});

export const OtherExpenditure = db.model<OtherExpDTO>("OtherExpenditure", OtherExpenditureSchema);

