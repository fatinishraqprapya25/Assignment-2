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
exports.orderController = void 0;
const orders_service_1 = require("./orders.service");
const orders_model_1 = __importDefault(require("./orders.model"));
const orders_validation_1 = __importDefault(require("./orders.validation"));
// controller for order creating
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderDetails = req.body;
        const { error } = yield orders_validation_1.default.validate(orderDetails);
        if (!error) {
            const result = yield orders_service_1.ordersService.createOrderIntoDb(orderDetails);
            res.status(200).json({
                success: true,
                message: "Order Created successfully",
                data: result
            });
            return;
        }
        res.status(200).json({
            success: false,
            message: error.message,
        });
    }
    catch (err) {
        res.status(200).json({
            success: false,
            message: err.message,
        });
    }
});
// controller for order retrieving
const retrieveOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.query.email;
    if (email) {
        retrieveOrdersByEmail(req, res, email);
        return;
    }
    try {
        const result = yield orders_model_1.default.find({});
        res.status(200).json({
            success: true,
            message: "Orders Retrieved Successfully",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});
// retrieve orders by user email
const retrieveOrdersByEmail = (req, res, email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield orders_service_1.ordersService.retrievingOrdersByEmailFromDb(email);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully for user email!",
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
exports.orderController = { createOrder, retrieveOrders, retrieveOrdersByEmail };
