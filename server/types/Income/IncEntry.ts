import { Schema } from "mongoose"
import { IncomeCategories } from "./enums"

export type IncEntryDTO = {
    _id: Schema.Types.ObjectId,
    name: string,
    category: IncomeCategories,
    amount: number,
    date: Date,
}