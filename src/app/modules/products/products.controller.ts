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
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Error Occured on Product Creation",
        });
    }
}

// controller for retrieving all products
const retrieveProduct = async (req: Request, res: Response) => {
    console.log("hi ")
    try {
        const products = await ProductServices.retrieveDataFromDb();
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: products
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}

// controller for finding product by id
const retrieveProductById = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;
        console.log(id);
        const result = await ProductServices.retrieveProductByIdFromDb(id);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({
            success: true,
            message: err.message,
        });
    }
}

// controller for updating product info by id
const updateProduct = async (req: Request, res: Response) => {
    try {
        const info = req.body;
        const id = req.params.productId;
        const result = ProductServices.updateProductByIdFromDb(id, info);

        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({
            success: true,
            message: err.message,
        });
    }
}


export const productController = { createProduct, retrieveProduct, retrieveProductById, updateProduct };