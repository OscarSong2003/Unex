import { ObjectId } from "mongoose"

export type TechEntryDTO = {
    amount: number,
    date: Date,
}

export type TechExpDTO = {
    total: number,
    techEntries: [ObjectId]
}