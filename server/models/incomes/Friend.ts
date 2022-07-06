import db from "../../db";
import { Schema } from "mongoose";
import { FriendIncDTO } from "../../types/Income/Friend";

// const FriendEntrySchema = new Schema<FriendEntryDTO>({
//     amount: {type: Number, required: true},
//     date: {type: Date, required: false}
// });

// export const FriendEntry = db.model<FriendEntryDTO>("FriendEntry", FriendEntrySchema);

const FriendIncomeSchema = new Schema<FriendIncDTO>({
    _id: Schema.Types.ObjectId,
    total: {type: Number, default: 0},
    friendEntries: [{type: Schema.Types.ObjectId, ref: "FriendEntry"}]
});

export const FriendIncome = db.model<FriendIncDTO>("FriendIncome", FriendIncomeSchema);