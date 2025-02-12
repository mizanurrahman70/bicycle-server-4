import mongoose,{Schema} from "mongoose";
import { Order } from "./order.interface";
const oderSchema =new Schema<Order>(
    {
        email: { type: String, required: true },
        product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
        totalPrice: { type: Number, required: true },
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const OrderModel =mongoose.model<Order>("Order",oderSchema)
export default OrderModel