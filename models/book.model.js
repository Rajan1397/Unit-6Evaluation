const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  
  likes: { type: Number, required: true, default: 0 },
  
  coverImage: {type: String, required: true, min: 0},
  content: {type: String, required: true},
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
      user_id: [{type:mongoose.Schema.Types.ObjectId, ref:"user"}],
    publication_id: {type:mongoose.Schema.Types.ObjectId, ref:"publication"},
    comment_id: [{type:mongoose.Schema.Types.ObjectId, ref:"comment"}],
});

const book = mongoose.model("books", bookSchema);

module.exports = book;
