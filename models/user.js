// imports
const mongoose = require("mongoose");

// define user Schema
const userSchema = mongoose.Schema({
  user_id: Number,
  subscription_type: String,
  monthly_revenue: Number,
  join_date: String,
  last_payment_date: String,
  country: String,
  age: Number,
  gender: String,
  device: String,
  plan_duration: String,
});

// create user model
const User = mongoose.model("User", userSchema);

// export user model
module.exports = User;
