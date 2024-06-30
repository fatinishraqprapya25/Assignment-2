import express from 'express';
import { orderController } from './orders.controller';
const orderRouter = express.Router();

// Order Creation
orderRouter.post("/", orderController.createOrder);
// Retrieve Orders
orderRouter.get("/", orderController.retrieveOrders);
// Retrieve Orders
orderRouter.get("/:email", orderController.retrieveOrdersByEmail);

export default orderRouter;