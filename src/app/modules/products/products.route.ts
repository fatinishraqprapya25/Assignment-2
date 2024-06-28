import express from "express";
import { productController } from "./products.controller";
const productRouter = express.Router();

// route for creating product
productRouter.post("/", productController.createProduct);
// route for retrieving all products
productRouter.get("/", productController.retrieveProduct);
// route for retrieving product by id
productRouter.get("/:productId", productController.retrieveProductById);

export default productRouter;