const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  body: {type: String, required: true},
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

const comment = mongoose.model("comments", commentSchema);

module.exports = comment;
