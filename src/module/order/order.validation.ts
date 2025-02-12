import z from "zod";
export const orderValidationSchema=z.object({
     email:z.string().email({message:"invalid email address"}),
      product: z.string().regex(/^[a-f\d]{24}$/i, { message: "Invalid product ID" }),
      quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
       totalPrice: z.number().min(0, { message: "Total price must be a positive number" })
})