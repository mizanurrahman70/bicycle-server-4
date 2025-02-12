
import { productController } from "./product.controller";
import express from "express";
const router = express.Router();
// Define routes
router.post('/products', productController.createProduct);
router.get("/products", productController.getAllProducts);
router.get("/products/:productId", productController.getProductById);
router.put("/products/:productId", productController.updateProduct);
router.delete("/products/:productId", productController.deleteProduct);

export const ProductRoutes = router;
