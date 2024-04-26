import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    title: String
})

export default model('category', categorySchema)

