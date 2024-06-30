import { Request, Response } from "express";
import { ordersService } from "./orders.service";
import OrderModel from "./orders.model";

// controller for order creating
const createOrder = async (req: Request, res: Response) => {
    try {
        const orderDetails = req.body;
        const result = await ordersService.createOrderIntoDb(orderDetails);
        res.status(200).json({
            success: true,
            message: "Order Created successfully",
            data: result
        });
    } catch (err) {
        res.status(200).json({
            success: false,
            message: "Error Occured on Order Creation",
        });
    }
}

// controller for order retrieving
const retrieveOrders = async (req: Request, res: Response) => {
    try {
        const result = await OrderModel.find({});
        res.status(200).json({
            success: true,
            message: "Orders Retrieved Successfully",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

// retrieve orders by user email
const retrieveOrdersByEmail = async (req: Request, res: Response) => {
    try {
        const email = req.params.email;
        const result = await ordersService.retrievingOrdersByEmailFromDb(email);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully for user email!",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({
            success: true,
            message: err.message,
        });
    }
}

export const orderController = { createOrder, retrieveOrders, retrieveOrdersByEmail };