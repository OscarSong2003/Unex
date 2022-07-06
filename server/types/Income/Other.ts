import { ObjectId } from "mongoose"

export type OtherIncEntryDTO = {
    amount: number,
    date: Date,
}

export type OtherIncDTO = {
    total: number,
    otherEntries: [ObjectId]
}