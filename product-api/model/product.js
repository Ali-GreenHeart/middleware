import mongoose, { Schema, model } from "mongoose";

const productModel = model("product",
    new Schema({
        name: String,
        price: Number,
        category: mongoose.ObjectId
    })
)

export default productModel
