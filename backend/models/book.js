import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publicationdate: Date,
    npages: Number,
    version: Number,
    editorial: String,
    isbn: String,
    // Relacion con user
    user: {type: mongoose.Schema.ObjectId, ref: "users"},
});

const book = mongoose.model("books",userSchema);
export default book;