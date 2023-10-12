// imports
const mongoose = require("mongoose");

// define user Schema
const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phoneNumber: String,
  address: String,
});

// create user model
const User = mongoose.model("User", userSchema);

// export user model
module.exports = User;
