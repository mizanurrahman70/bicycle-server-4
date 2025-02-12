import { NextFunction, Request, Response } from "express";
import { productService } from "./product.service";
import { productValidationSchema } from "./product.validaton";

// Create a product
const createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const validateProduct = productValidationSchema.parse(req.body);
    const result = await productService.createProduct(validateProduct);
    res.status(201).json({
      message: "Product created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


// Get all products
const getAllProducts = async (req: Request, res: Response,next:NextFunction)=> {
  try {
    const searchTerm = req.query.searchTerm as string;
    const products = await productService.getAllProducts(searchTerm);
    res.status(200).json({
      message: "Products retrieved successfully",
      success: true,
      data: products,
    });
  } catch (error) {
    next(error)
  }
};

// Get a product by ID
const getProductById = async (req: Request, res: Response,next:NextFunction)=> {
  try {
    const { productId } = req.params;
    const product = await productService.getProductById(productId);
    if (!product) {
      console.log(res.status(404).json({ message: "Product not found", success: false }));;
    }

    res.status(200).json({ message: "Product retrieved successfully", success: true, data: product });
  } catch (error) {
   next(error)
  }
};

// Update a product
const updateProduct = async (req: Request, res: Response,next:NextFunction): Promise<void> => {
  try {
    const productId = req.params.productId;
    const updates = req.body;
    const updatedProduct = await productService.updateProduct(productId, updates);
    if (updatedProduct) {
      res.status(200).json({
        message: "Product updated successfully",
        status: true,
        data: updatedProduct,
      });
    } else {
      res.status(404).json({
        message: "Product not found",
        status: false,
      });
    }
  } catch (error) {
 next(error)
  }
};

// Delete a product
const deleteProduct = async (req: Request, res: Response,next:NextFunction): Promise<void> => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await productService.deleteProduct(productId);
    if (deletedProduct) {
      res.status(200).json({
        message: "Product deleted successfully",
        status: true,
        data: deletedProduct,
      });
    } else {
      res.status(404).json({
        message: "Product not found",
        status: false,
      });
    }
  } catch (error) {
  next(error)
  }
};

// Export the product controller
export const productController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
