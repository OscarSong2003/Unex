import { ObjectId } from "mongoose"

// export type GroceryEntryDTO = {
//     amount: number,
//     date: Date,
// }

export type GroceryExpDTO = {
    total: number,
    groceryEntries: [ObjectId]
}