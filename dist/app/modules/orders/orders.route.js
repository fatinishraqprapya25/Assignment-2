"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orders_controller_1 = require("./orders.controller");
const orderRouter = express_1.default.Router();
// Order Creation
orderRouter.post("/", orders_controller_1.orderController.createOrder);
// Retrieve Orders
orderRouter.get("/", orders_controller_1.orderController.retrieveOrders);
exports.default = orderRouter;
