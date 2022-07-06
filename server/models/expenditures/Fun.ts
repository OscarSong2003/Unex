import db from "../../db";
import { Schema } from "mongoose";
import { FunExpDTO } from "../../types/FunExp";

// const FunEntrySchema = new Schema<FunEntryDTO>({
//     amount: {type: Number, required: true},
//     date: {type: Date, required: false}
// });

// export const FunEntry = db.model<FunEntryDTO>("FunEntry", FunEntrySchema);

const FunExpenditureSchema = new Schema<FunExpDTO>({
    _id: Schema.Types.ObjectId,
    total: {type: Number, default: 0, required: true},
    funEntries: [{type: Schema.Types.ObjectId, ref: "ExpenditureEntry"}]
});

export const FunExpenditure = db.model<FunExpDTO>("FunExpenditure", FunExpenditureSchema);