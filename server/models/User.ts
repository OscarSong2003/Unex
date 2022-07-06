import { Schema } from "mongoose";
import { UserDTO } from "../types/User";
import db from "../db";

const UserSchema = new Schema<UserDTO>({
    email: {type: String, required: true},
    amountAvailable: {type: Number, default: 0},
    amountSpent: {type: Number, default: 0},
    // expenditures 
    tuitionExp: {type: Schema.Types.ObjectId, ref: "TuitionExpenditure"},
    groceryExp: {type: Schema.Types.ObjectId, ref: "GroceryExpenditure"},
    foodExp: {type: Schema.Types.ObjectId, ref: "FoodExpenditure"},
    techExp: {type: Schema.Types.ObjectId, ref: "TechExpenditure"},
    funExp: {type: Schema.Types.ObjectId, ref: "FunExpenditure"},
    otherExp: {type: Schema.Types.ObjectId, ref: "OtherExpenditure"},
    // incomes
    familyInc: {type: Schema.Types.ObjectId, ref: "FamilyIncome"},
    jobInc: {type: Schema.Types.ObjectId, ref: "JobIncome"},
    friendInc: {type: Schema.Types.ObjectId, ref: "FriendIncome"},
    scholarshipInc: {type: Schema.Types.ObjectId, ref: "ScholarshipIncome"},
    otherInc: {type: Schema.Types.ObjectId, ref: "OtherIncome"}
});

export const User = db.model<UserDTO>("User", UserSchema);

// export type UserDTO = {
//     username: string, 
//     amountAvailable: number,
//     amountSpent: number, 
//     tuitionExp: tuitionDTO,
//     groceryExp: groceryDTO,
//     foodExp: foodDTO,
//     techExp: techDTO, 
//     funExp: funDTO,
//     otherExp: otherDTO
// }