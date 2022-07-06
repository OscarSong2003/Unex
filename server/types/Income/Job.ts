import { ObjectId, Schema } from "mongoose"

// export type JobEntryDTO = {
//     amount: number,
//     date: Date,
// }

export type JobIncDTO = {
    _id: Schema.Types.ObjectId,
    total: number,
    jobEntries: [ObjectId]
}