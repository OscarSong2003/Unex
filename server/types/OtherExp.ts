import { ObjectId, Schema } from "mongoose"

// export type OtherExpEntryDTO = {
//     amount: number,
//     date: Date,
// }

export type OtherExpDTO = {
    _id: Schema.Types.ObjectId,
    total: number,
    otherEntries: [ObjectId]
}