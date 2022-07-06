import { Schema } from "mongoose"

export type IncEntryDTO = {
    _id: Schema.Types.ObjectId,
    amount: number,
    date: Date,
}