import { ObjectId, Schema } from "mongoose"

// export type ScholarshipEntryDTO = {
//     amount: number,
//     date: Date,
// }

export type ScholarshipIncDTO = {
    _id: Schema.Types.ObjectId,
    total: number,
    scholarshipEntries: [ObjectId]
}