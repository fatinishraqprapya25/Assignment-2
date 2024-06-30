import ProductModel from "../products/products.model";
import { ProductServices } from "../products/products.service";
import { Order } from "./orders.interface";
import OrderModel from "./orders.model";

// Creating Order
const createOrderIntoDb = async (order: Order) => {
    try {
        // order details
        const productId = order.productId;
        const orderedQuantity = order.quantity;

        // product details
        const checkAvailability = await ProductServices.retrieveProductByIdFromDb(productId);

        if (checkAvailability) {
            const quantity = checkAvailability.inventory.quantity;
            if (quantity >= orderedQuantity) {
                // create order
                const result = await OrderModel.create(order);

                // update product quantity
                const qRes = await ProductModel.findByIdAndUpdate(productId, {
                    $inc: { 'inventory.quantity': -orderedQuantity }
                }, { new: true });

                // update InStock Status
                if (qRes?.inventory.quantity === 0) {
                    await ProductModel.findByIdAndUpdate(productId, {
                        $set: { 'inventory.inStock': false }
                    });
                }
                return result;
            } else {
                throw new Error("Quantity not available!");
            }
        } else {
            throw new Error("product not available");
        }

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