const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema({
  name: {type: String, required: true},
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

const publication = mongoose.model("publications", publicationSchema);

module.exports = publication;
