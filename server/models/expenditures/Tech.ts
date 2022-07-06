import db from "../../db";
import { Schema } from "mongoose";
import { TechExpDTO } from "../../types/TechExp";

// const TechEntrySchema = new Schema<TechEntryDTO>({
//     amount: {type: Number, required: true},
//     date: {type: Date, required: false}
// });

// export const TechEntry = db.model<TechEntryDTO>("TechEntry", TechEntrySchema);

const TechExpenditureSchema = new Schema<TechExpDTO>({
    total: {type: Number, default: 0},
    techEntries: [{type: Schema.Types.ObjectId, ref: "ExpenditureEntry"}]
});

export const TechExpenditure = db.model<TechExpDTO>("TechExpenditure", TechExpenditureSchema);
