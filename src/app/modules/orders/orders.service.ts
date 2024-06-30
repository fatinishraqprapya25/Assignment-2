import { Order } from "./orders.interface";
import OrderModel from "./orders.model";

// Creating Order
const createOrderIntoDb = async (order: Order) => {
    try {
        const result = await OrderModel.create(order);
        return result;
    } catch (err: any) {
        throw new Error(err.message);
    }
}

// Retreiving all Orders
const retrievingAllOrderFromDb = async () => {
    try {
        const result = await OrderModel.find({});
        return result;
    } catch (err: any) {
        throw new Error(err.message);
    }
}

// Retreiving orders by Email Address
const retrievingOrdersByEmailFromDb = async (email: string) => {
    try {
        const result = await OrderModel.find({ email: email });
        return result;
    } catch (err: any) {
        throw new Error(err.message);
    }
}

export const ordersService = { createOrderIntoDb, retrievingAllOrderFromDb, retrievingOrdersByEmailFromDb };