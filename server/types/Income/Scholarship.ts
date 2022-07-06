import { ObjectId } from "mongoose"

export type ScholarshipEntryDTO = {
    amount: number,
    date: Date,
}

export type ScholarshipIncDTO = {
    total: number,
    scholarshipEntries: [ObjectId]
}