const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phoneNumber: String,
  address: String,
});

const User = mongoose.model("User", userSchema);

export default User;
