const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  
  likes: { type: Number, required: true, default: 0 },
  
  coverImage: {type: String, required: true, min: 0},
  content: {type: String, required: true},
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

const book = mongoose.model("books", bookSchema);

module.exports = book;
