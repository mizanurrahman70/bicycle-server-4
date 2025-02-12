import express, {Application, Request, Response } from 'express';
import cors from 'cors';
import { OrderRoutes } from './module/order/order.route';
import { ProductRoutes } from './module/product/products.route';
import error from './middlewares/error';
const app : Application = express()

//parser
app.use(express.json())
app.use(cors())

app.use("/api",ProductRoutes)
app.use("/api", OrderRoutes);

app.use(error);
app.get('/', (req:Request, res:Response) => {
  res.send({status:true,message:'Hello World!'})
})
export default app
