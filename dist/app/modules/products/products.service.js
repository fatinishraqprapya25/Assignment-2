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
exports.ProductServices = void 0;
const products_model_1 = __importDefault(require("./products.model"));
// insert product into database
const insertProductIntoDb = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield products_model_1.default.create(productData);
        return result;
    }
    catch (err) {
        throw new Error(err.message);
    }
});
// retreiving all products from database
const retrieveDataFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield products_model_1.default.find({});
        return result;
    }
    catch (err) {
        throw new Error(err.message);
    }
});
// retreive product by id
const retrieveProductByIdFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield products_model_1.default.findOne({ _id: id });
        return result;
    }
    catch (err) {
        throw new Error(err.message);
    }
});
// update product by id
const updateProductByIdFromDb = (id, info) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield products_model_1.default.findOneAndUpdate({ _id: id }, info, { new: true, useFindAndModify: false });
        return result;
    }
    catch (err) {
        throw new Error(err.message);
    }
});
// delete product by id
const deleteProductByIdFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield products_model_1.default.findOneAndDelete({ _id: id });
        return res;
    }
    catch (err) {
        throw new Error(err.message);
    }
});
// product search system
const searchProductsInDb = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = {
            $or: [
                { name: { $regex: new RegExp(searchTerm, "i") } },
                { category: { $regex: new RegExp(searchTerm, "i") } },
                { tags: { $in: [searchTerm] } }
            ]
        };
        const products = yield products_model_1.default.find(query);
        return products;
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.ProductServices = { insertProductIntoDb, retrieveDataFromDb, retrieveProductByIdFromDb, updateProductByIdFromDb, deleteProductByIdFromDb, searchProductsInDb };
