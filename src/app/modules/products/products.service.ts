import { Products } from "./products.interface";
import ProductModel from "./products.model"


// insert product into database
const insertProductIntoDb = async (productData: Products) => {
    try {
        const result = await ProductModel.create(productData);
        return result;
    } catch (err: any) {
        throw new Error(err.message);
    }
}

// retreiving all products from database
const retrieveDataFromDb = async () => {
    try {
        const result = await ProductModel.find({});
        return result;
    } catch (err: any) {
        throw new Error(err.message);
    }
}

// retreive product by id
const retrieveProductByIdFromDb = async (id: string) => {
    try {
        const result = await ProductModel.findOne({ _id: id });
        return result;
    } catch (err: any) {
        throw new Error(err.message);
    }
}

// update product by id
const updateProductByIdFromDb = async (id: string, info: any) => {
    try {
        const result = await ProductModel.findOneAndUpdate({ _id: id }, info, { new: true, useFindAndModify: false });
        return result;
    } catch (err: any) {
        throw new Error(err.message);
    }
}

export const ProductServices = { insertProductIntoDb, retrieveDataFromDb, retrieveProductByIdFromDb, updateProductByIdFromDb };