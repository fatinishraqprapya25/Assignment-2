"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_route_1 = __importDefault(require("./app/modules/products/products.route"));
const orders_route_1 = __importDefault(require("./app/modules/orders/orders.route"));
const app = (0, express_1.default)();
// persers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Application Routes
app.use("/api/products", products_route_1.default);
app.use("/api/orders", orders_route_1.default);
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route not Found"
    });
    next();
});
exports.default = app;
