const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minlength: 3, maxlength: 30 },
  
  lastName: { type: String, required: false, minlength: 3, maxlength: 30  },
  age: { type: Number, required: true, min: 1, max: 150 },
  email: { type: String, required: true, unique: true },
  
profileImages: {type: Array, required: true, min: 1},  
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
