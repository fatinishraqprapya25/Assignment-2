import mongoose, { Schema, model } from "mongoose";
import { Order } from "./orders.interface";

const ordersSchema = new Schema<Order>({
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
})

const OrderModel = model<Order>("Order", ordersSchema);
export default OrderModel;