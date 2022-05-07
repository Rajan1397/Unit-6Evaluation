const mongoose = require("mongoose");

//step 1) connect express with mongoDB
const connect = () => {
  // this is async func

  return mongoose.connect("mongodb://127.0.0.1:27017/test");
};

module.exports = connect;
