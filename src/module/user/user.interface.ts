import { USER_ROLE } from "./user.constans"

export interface IUser {
    name:string
    email:string
    password:string
    age:number
    photo?:string | null
    role: 'user' | 'admin'
    userStatus : 'active | inactive'
}
export type TuserRole = keyof typeof USER_ROLE