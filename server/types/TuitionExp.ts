import { ObjectId, Schema } from "mongoose"

// export type TuitionEntryDTO = {
//     amount: number,
//     date: Date,
// }

export type TuitionExpDTO = {
     _id: Schema.Types.ObjectId,
    total: number,
    tuitionEntries: [ObjectId]
}