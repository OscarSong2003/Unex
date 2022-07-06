import { ObjectId, Schema } from "mongoose"

// export type FriendEntryDTO = {
//     amount: number,
//     date: Date,
// }

export type FriendIncDTO = {
    _id: Schema.Types.ObjectId,
    total: number,
    friendEntries: [ObjectId]
}