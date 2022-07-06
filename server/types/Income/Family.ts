import { ObjectId } from "mongoose"

export type FamilyEntryDTO = {
    amount: number,
    date: Date,
}

export type FamilyIncDTO = {
    total: number,
    familyEntries: [ObjectId]
}