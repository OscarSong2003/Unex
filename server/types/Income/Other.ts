import { ObjectId, Schema } from "mongoose"

// export type OtherIncEntryDTO = {
//     amount: number,
//     date: Date,
// }

export type OtherIncDTO = {
    _id: Schema.Types.ObjectId,
    total: number,
    otherEntries: [ObjectId]
}