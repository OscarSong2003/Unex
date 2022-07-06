import { ObjectId } from "mongoose"

// export type FoodEntryDTO = {
//     amount: number,
//     date: Date,
// }

export type FoodExpDTO = {
    total: number,
    foodEntries: [ObjectId]
}