import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
    fechapublicacion: Date,
    npaginas: Number,
    version: Number,
    editorial: String,
    isbn: String,
    // Relacion con user
    user: {type: mongoose.Schema.ObjectId, ref: "users"},
});

const book = mongoose.model("books",userSchema);
export default book;