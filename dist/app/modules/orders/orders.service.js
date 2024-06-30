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
exports.ordersService = void 0;
const products_model_1 = __importDefault(require("../products/products.model"));
const products_service_1 = require("../products/products.service");
const orders_model_1 = __importDefault(require("./orders.model"));
// Creating Order
const createOrderIntoDb = (order) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // order details
        const productId = order.productId;
        const orderedQuantity = order.quantity;
        // product details
        const checkAvailability = yield products_service_1.ProductServices.retrieveProductByIdFromDb(productId);
        if (checkAvailability) {
            const quantity = checkAvailability.inventory.quantity;
            if (quantity >= orderedQuantity) {
                // create order
                const result = yield orders_model_1.default.create(order);
                // update product quantity
                const qRes = yield products_model_1.default.findByIdAndUpdate(productId, {
                    $inc: { 'inventory.quantity': -orderedQuantity }
                }, { new: true });
                // update InStock Status
                if ((qRes === null || qRes === void 0 ? void 0 : qRes.inventory.quantity) === 0) {
                    yield products_model_1.default.findByIdAndUpdate(productId, {
                        $set: { 'inventory.inStock': false }
                    });
                }
                return result;
            }
            else {
                throw new Error("Quantity not available!");
            }
        }
        else {
            throw new Error("product not available");
        }
    }
    catch (err) {
        throw new Error(err.message);
    }
});
// Retreiving all Orders
const retrievingAllOrderFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield orders_model_1.default.find({});
        return result;
    }
    catch (err) {
        throw new Error(err.message);
    }
});
// Retreiving orders by Email Address
const retrievingOrdersByEmailFromDb = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield orders_model_1.default.find({ email: email });
        return result;
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.ordersService = { createOrderIntoDb, retrievingAllOrderFromDb, retrievingOrdersByEmailFromDb };
