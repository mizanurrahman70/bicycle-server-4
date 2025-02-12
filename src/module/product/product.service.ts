import { Iproduct } from "./product.interface";
import Product from "./product.model";

// Create a product
const createProduct = async (payload: Iproduct) => {
    const result = await Product.create(payload);
    return result;
};

// Get all products
const getAllProducts = async (searchTerm?: string) => {
    let query = {};
    if (searchTerm) {
        query = {
            $or: [
                { name: new RegExp(searchTerm, "i") },
                { brand: new RegExp(searchTerm, "i") },
                { type: new RegExp(searchTerm, "i") },
            ],
        };
    }
    const products = await Product.find(query);
    return products;
};

// Get a product by ID
const getProductById = async (productId: string) => {
    console.log(productId);
    const product = await Product.findById(productId);
    console.log(product);
    return product;
};

// Update a product
const updateProduct = async (productId: string, updates: Partial<Iproduct>) => {
    const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true });
    return updatedProduct;
};

// Delete a product
const deleteProduct = async (productId: string) => {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    return deletedProduct;
};

export const productService = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
