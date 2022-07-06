import { ObjectId } from "mongoose"

// export type OtherExpEntryDTO = {
//     amount: number,
//     date: Date,
// }

export type OtherExpDTO = {
    total: number,
    otherEntries: [ObjectId]
}