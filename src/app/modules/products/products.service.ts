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

// delete product by id
const deleteProductByIdFromDb = async (id: string) => {
    try {
        const res = await ProductModel.findOneAndDelete({ _id: id });
        return res;
    } catch (err: any) {
        throw new Error(err.message);
    }
}

// product search system
const searchProductsInDb = async (searchTerm: string) => {
    try {
        const query = {
            $or: [
                { name: { $regex: new RegExp(searchTerm, "i") } },
                { category: { $regex: new RegExp(searchTerm, "i") } },
                { tags: { $in: [searchTerm] } }
            ]
        };

        const products = await ProductModel.find(query);
        console.log(products);
        return products;

    } catch (err: any) {
        throw new Error(err.message);
    }
}

export const ProductServices = { insertProductIntoDb, retrieveDataFromDb, retrieveProductByIdFromDb, updateProductByIdFromDb, deleteProductByIdFromDb, searchProductsInDb };