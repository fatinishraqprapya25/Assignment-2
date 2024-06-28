import express from "express";
import { productController } from "./product.controller";
const productRouter = express.Router();

// route for creating product
productRouter.post("/", productController.createProduct);

export default productRouter;