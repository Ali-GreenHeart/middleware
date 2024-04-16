import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    name: String,
    author: String,
    pageCount: Number,
    genre: String,
    publishDate: Date
})

const bookModel = model('book', bookSchema)

export default bookModel;
