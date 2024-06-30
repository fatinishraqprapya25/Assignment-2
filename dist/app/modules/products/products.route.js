"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const productRouter = express_1.default.Router();
// route for creating product
productRouter.post("/", products_controller_1.productController.createProduct);
// route for retrieving all products
productRouter.get("/", products_controller_1.productController.retrieveProduct);
// route for retrieving product by id
productRouter.get("/:productId", products_controller_1.productController.retrieveProductById);
// route for updating product by id
productRouter.put("/:productId", products_controller_1.productController.updateProduct);
// route for deleting product by id
productRouter.delete("/:productId", products_controller_1.productController.deleteProduct);
exports.default = productRouter;
