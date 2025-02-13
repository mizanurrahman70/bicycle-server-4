import { IUser } from "./user.interface";

const createUser = async (payload:IUser)=>{
    payload.role = 'admin' ;
    const result = await User.create(payload)
    return result
}