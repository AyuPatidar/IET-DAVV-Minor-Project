const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phoneNumber: String,
  address: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
