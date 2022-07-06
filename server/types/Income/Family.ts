import { ObjectId, Schema } from "mongoose"

// export type FamilyEntryDTO = {
//     amount: number,
//     date: Date,
// }

export type FamilyIncDTO = {
    _id: Schema.Types.ObjectId,
    total: number,
    familyEntries: [ObjectId]
}