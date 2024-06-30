"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const products_service_1 = require("./products.service");
const products_validate_1 = __importDefault(require("./products.validate"));
// controller for creating product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productInfo = req.body;
        // Validation Using Joi
        const { error } = products_validate_1.default.validate(productInfo);
        if (!error) {
            const productCreationData = yield products_service_1.ProductServices.insertProductIntoDb(productInfo);
            res.status(200).json({
                success: true,
                message: "Product created successfully!",
                data: productCreationData
            });
        }
        else {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});
// controller for retrieving all products
const retrieveProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const searchTerm = req.query.searchTerm;
    if (req.query.searchTerm) {
        yield searchProducts(req, res, searchTerm);
        return;
    }
    else {
        try {
            const products = yield products_service_1.ProductServices.retrieveDataFromDb();
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: products
            });
        }
        catch (err) {
            res.status(500).json({
                success: false,
                message: err.message,
            });
        }
    }
});
// controller for finding product by id
const retrieveProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield products_service_1.ProductServices.retrieveProductByIdFromDb(id);
        if (result) {
            res.status(200).json({
                success: true,
                message: "Product fetched successfully!",
                data: result
            });
        }
        else {
            res.status(200).json({
                success: false,
                message: "No Product Found",
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});
// controller for updating product info by id
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const info = req.body;
        const id = req.params.productId;
        const result = yield products_service_1.ProductServices.updateProductByIdFromDb(id, info);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: true,
            message: err.message,
        });
    }
});
// Delete Product By id
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield products_service_1.ProductServices.deleteProductByIdFromDb(id);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(200).json({
            success: false,
            message: err.message,
        });
    }
});
// search product
const searchProducts = (req, res, searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield products_service_1.ProductServices.searchProductsInDb(searchTerm);
        res.status(200).json({
            success: true,
            message: "successfully searched",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});
// exports
exports.productController = { createProduct, retrieveProduct, retrieveProductById, updateProduct, deleteProduct, searchProducts };
