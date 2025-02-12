import { NextFunction, Request, Response } from "express";
import { OrderServices } from "./order.service";
import { orderValidationSchema } from "./order.validation";
import mongoose from "mongoose";

//create order
const createOrder = async (req: Request, res: Response,next:NextFunction) => {
    {
        try {
            const validateOrder= orderValidationSchema.parse(req.body)
            const productObjactId =new mongoose.Types.ObjectId(validateOrder.product)
            console.log(productObjactId);
        
            const result = await OrderServices.createOrder({
                ...validateOrder,
                product: productObjactId,
              });

            res.status(200).json({
                message: 'Order created successfully',
                status: true,
                data: result,
            });
        } catch (error) {
            next(error)
        }
    }
}

//total revenue//
const totalRevenue = async (req: Request, res: Response,next:NextFunction) => {
    try {
        const totalRevenue = await OrderServices.calculateRevenue();
        res.status(200).json({
            message: 'Revenue calculated successfully',
            status: true,
            data: { totalRevenue },
        });
    } catch (error) {
       next(error )
    }
}




export const OrderControllers = {
    createOrder,
    totalRevenue
}