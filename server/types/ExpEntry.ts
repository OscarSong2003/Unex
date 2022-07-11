import { ObjectId, Schema } from "mongoose"
import { ExpenditureCategories } from "./enums"

export type ExpEntryDTO = {
    _id: Schema.Types.ObjectId,
    name: string,
    category: ExpenditureCategories,
    amount: number,
    date: Date,
}