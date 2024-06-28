import mongoose, { Schema } from "mongoose";
import { Inventory, Products, Variant } from "./products.interface";

const VariantSchema: Schema = new Schema<Variant>({
    type: { type: String, required: true },
    value: { type: String, required: true }
});

const InventorySchema: Schema = new Schema<Inventory>({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true }
});

const ProductsSchema: Schema = new Schema<Products>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [VariantSchema], required: true },
    inventory: { type: InventorySchema, required: true }
});

const ProductModel = mongoose.model<Products>("Product", ProductsSchema);
export default ProductModel;