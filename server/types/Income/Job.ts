import { ObjectId } from "mongoose"

export type JobEntryDTO = {
    amount: number,
    date: Date,
}

export type JobIncDTO = {
    total: number,
    jobEntries: [ObjectId]
}