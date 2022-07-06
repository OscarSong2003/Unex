import db from "../../db";
import { Schema } from "mongoose";
import { GroceryExpDTO } from "../../types/GroceryExp";

// const GroceryEntrySchema = new Schema<GroceryEntryDTO>({
//     amount: {type: Number, required: true},
//     date: {type: Date, required: false}
// });

// export const GroceryEntry = db.model<GroceryEntryDTO>("GroceryEntry", GroceryEntrySchema);

const GroceryExpenditureSchema = new Schema<GroceryExpDTO>({
    total: {type: Number, default: 0},
    groceryEntries: [{type: Schema.Types.ObjectId, ref: "ExpenditureEntry"}]
});

export const GroceryExpenditure = db.model<GroceryExpDTO>("GroceryExpenditure", GroceryExpenditureSchema);

