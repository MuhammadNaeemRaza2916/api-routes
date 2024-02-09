import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    name: String,
    price: String,
    color: String,
    category: String,
    company: String
})

export const Products = mongoose.models.products || mongoose.model("products", productModel)