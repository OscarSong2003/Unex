import { ObjectId, Schema } from "mongoose"

// export type FoodEntryDTO = {
//     amount: number,
//     date: Date,
// }

export type FoodExpDTO = {
    _id: Schema.Types.ObjectId,
    total: number,
    foodEntries: [ObjectId]
}