import { ObjectId } from "mongoose"

export type TuitionEntryDTO = {
    amount: number,
    date: Date,
}

export type TuitionExpDTO = {
    total: number,
    tuitionEntries: [ObjectId]
}