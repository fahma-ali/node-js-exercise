import mongoose from "mongoose";
const { Schema } = mongoose;
const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publisherYear: { type: Number },
    genre:{type:String}
})
const book = mongoose.model('Books', bookSchema);
export default book;