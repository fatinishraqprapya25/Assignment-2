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
            message: err.message,
        });
    }
}

// controller for retrieving all products
const retrieveProduct = async (req: Request, res: Response) => {
    const searchTerm = req.query.searchTerm as string;
    if (req.query.searchTerm) {
        await searchProducts(req, res, searchTerm);
        return;
    } else {
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
}

// controller for finding product by id
const retrieveProductById = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;
        const result = await ProductServices.retrieveProductByIdFromDb(id);
        if (result) {
            res.status(200).json({
                success: true,
                message: "Product fetched successfully!",
                data: result
            });
        } else {
            res.status(200).json({
                success: false,
                message: "No Product Found",

            });
        }

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}

// controller for updating product info by id
const updateProduct = async (req: Request, res: Response) => {
    try {
        const info = req.body;
        const id = req.params.productId;
        const result = await ProductServices.updateProductByIdFromDb(id, info);

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

// Delete Product By id
const deleteProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId;
        const result = await ProductServices.deleteProductByIdFromDb(id);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result
        });
    } catch (err: any) {
        res.status(200).json({
            success: false,
            message: err.message,
        });
    }
}


// search product
const searchProducts = async (req: Request, res: Response, searchTerm: string) => {
    try {
        const result: any = await ProductServices.searchProductsInDb(searchTerm);
        res.status(200).json({
            success: true,
            message: "successfully searched",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}


// exports
export const productController = { createProduct, retrieveProduct, retrieveProductById, updateProduct, deleteProduct, searchProducts };