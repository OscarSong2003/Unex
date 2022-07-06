import db from "../../db";
import { Schema } from "mongoose";
import { OtherIncEntryDTO, OtherIncDTO } from "../../types/Income/Other";

const OtherIncEntrySchema = new Schema<OtherIncEntryDTO>({
    amount: {type: Number, required: true},
    date: {type: Date, required: false}
});

export const OtherIncEntry = db.model<OtherIncEntryDTO>("OtherIncEntry", OtherIncEntrySchema);

const OtherIncomeSchema = new Schema<OtherIncDTO>({
    total: {type: Number, default: 0},
    otherEntries: [{type: Schema.Types.ObjectId, ref: "OtherIncEntry"}]
});

export const OtherIncome = db.model<OtherIncDTO>("OtherIncome", OtherIncomeSchema);