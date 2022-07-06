import { ObjectId, Schema } from "mongoose"

// export type FunEntryDTO = {
//     amount: number,
//     date: Date,
// }

export type FunExpDTO = {
    _id: Schema.Types.ObjectId,
    total: number,
    funEntries: [ObjectId]
}