import {z} from "zod";
export const productValidationSchema =z.object({
name:z.string().min(1,{message:"Name is required"}),
brand:z.string().min(1,{message:'brand is required'}).trim(),
type:z.enum(["Mountain", "Road", "Hybrid", "Electric"],{
    errorMap:()=>({message:"Invalid category"}),
}),
description: z.string().min(1,{message:'Description is  required'}).trim(),
price: z
.number()
.min(0, { message: "Price must be a positive number" }),
quantity: z
.number()
.min(0, { message: "Quantity must be a positive number" }),
inStock:z.boolean()

})