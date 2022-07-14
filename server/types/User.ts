import { ObjectId } from "mongoose"
import { TuitionExpDTO } from "./TuitionExp"
import { GroceryExpDTO } from "./GroceryExp"
import { FoodExpDTO } from "./FoodExp"
import { TechExpDTO } from "./TechExp"
import { FunExpDTO } from "./FunExp"
import { OtherExpDTO } from "./OtherExp"
import { FamilyIncDTO } from "./Income/Family"
import { JobIncDTO } from "./Income/Job"
import { FriendIncDTO } from "./Income/Friend"
import { ScholarshipIncDTO } from "./Income/Scholarship"
import { OtherIncDTO } from "./Income/Other"
import { Schema } from "mongoose"

export type UserDTO = {
    _id: Schema.Types.ObjectId,
    email: string, 
    amountAvailable: number,
    amountSpent: number, 
    tuitionExp: TuitionExpDTO,
    groceryExp: GroceryExpDTO,
    foodExp: FoodExpDTO,
    techExp: TechExpDTO, 
    funExp: FunExpDTO,
    otherExp: OtherExpDTO,
    familyInc: FamilyIncDTO,
    jobInc: JobIncDTO,
    friendInc: FriendIncDTO,
    scholarshipInc: ScholarshipIncDTO,
    otherInc: OtherIncDTO,
}