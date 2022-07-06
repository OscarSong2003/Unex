import { ObjectId } from "mongoose"

// export type FunEntryDTO = {
//     amount: number,
//     date: Date,
// }

export type FunExpDTO = {
    total: number,
    funEntries: [ObjectId]
}