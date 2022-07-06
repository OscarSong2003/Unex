import { ObjectId, Schema } from "mongoose"

export type ExpEntryDTO = {
    _id: Schema.Types.ObjectId,
    amount: number,
    date: Date,
}