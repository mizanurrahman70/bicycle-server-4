import express, {Application, Request, Response } from 'express';
import cors from 'cors';
import { OrderRoutes } from './module/order/order.route';
import { ProductRoutes } from './module/product/products.route';
import error from './middlewares/error';
import authRouter from './module/auth/auth.router';
import userRouter from './module/user/user.router';
const app : Application = express()
app.use(cors({
  origin: 'http://localhost:5173',
  credentials : true,
}))
//parser
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use("/api",ProductRoutes)
app.use("/api", OrderRoutes);


app.use(error);
app.get('/', (req:Request, res:Response) => {
  res.send({status:true,message:'Hello World!'})
})
export default app
