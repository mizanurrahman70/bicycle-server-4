
import { Types } from "mongoose";

export type IUser = {
    _id?: string | Types.ObjectId;
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
    phone?: string;
    address?: string;
    city?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
