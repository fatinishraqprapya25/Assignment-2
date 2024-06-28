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

export const ProductServices = { insertProductIntoDb };