import express from "express";
import { productController } from "./products.controller";
const productRouter = express.Router();

// route for creating product
productRouter.post("/", productController.createProduct);
// route for retrieving all products
productRouter.get("/", productController.retrieveProduct);
// route for retrieving product by id
productRouter.get("/:productId", productController.retrieveProductById);
// route for updating product by id
productRouter.put("/:productId", productController.updateProduct);
// route for deleting product by id
productRouter.delete("/:productId", productController.deleteProduct);
// route for searching product
// productRouter.get("/search/:searchTerm", productController.searchProducts);

export default productRouter;