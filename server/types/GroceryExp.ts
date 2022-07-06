import { ObjectId, Schema } from "mongoose"

// export type GroceryEntryDTO = {
//     amount: number,
//     date: Date,
// }

export type GroceryExpDTO = {
    _id: Schema.Types.ObjectId,
    total: number,
    groceryEntries: [ObjectId]
}