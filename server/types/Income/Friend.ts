import { ObjectId } from "mongoose"

export type FriendEntryDTO = {
    amount: number,
    date: Date,
}

export type FriendIncDTO = {
    total: number,
    friendEntries: [ObjectId]
}