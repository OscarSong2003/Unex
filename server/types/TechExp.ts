import { ObjectId, Schema } from "mongoose"

// export type TechEntryDTO = {
//     amount: number,
//     date: Date,
// }

export type TechExpDTO = {
    _id: Schema.Types.ObjectId,
    total: number,
    techEntries: [ObjectId]
}