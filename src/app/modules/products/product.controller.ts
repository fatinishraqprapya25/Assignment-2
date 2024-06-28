import { Request, Response } from "express";
import { ProductServices } from "./product.service";

// controller for creating product
const createProduct = async (req: Request, res: Response) => {
    try {
        const productInfo = req.body;
        const productCreationData = await ProductServices.insertProductIntoDb(productInfo);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: productCreationData
        });
    } catch (err: any) {
        res.status(200).json({
            success: false,
            message: "Error Occured on Product Creation",
        });
    }
}

export const productController = { createProduct };