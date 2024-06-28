import { Request, Response } from "express";
import { ProductServices } from "./products.service";
import productValidationSchema from "./products.validate";

// controller for creating product
const createProduct = async (req: Request, res: Response) => {
    try {
        const productInfo = req.body;
        // Validation Using Joi
        const { error } = productValidationSchema.validate(productInfo);
        if (!error) {
            const productCreationData = await ProductServices.insertProductIntoDb(productInfo);
            res.status(200).json({
                success: true,
                message: "Product created successfully!",
                data: productCreationData
            });
        } else {
            res.status(200).json({
                success: false,
                message: error.message,
            });
        }

    } catch (err: any) {
        res.status(200).json({
            success: false,
            message: "Error Occured on Product Creation",
        });
    }
}

// controller for retrieving all products
const retrieveProduct = async (req: Request, res: Response) => {
    try {
        const products = await ProductServices.retrieveDataFromDb();
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: products
        });
    } catch (err: any) {
        res.status(200).json({
            success: false,
            message: err.message,
        });
    }
}

export const productController = { createProduct, retrieveProduct };