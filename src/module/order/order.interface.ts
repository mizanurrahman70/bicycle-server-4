import mongoose from "mongoose";
export type Order={
    email: string;
    product : mongoose.Types.ObjectId;
    quantity: number ;
    totalPrice: number;
}