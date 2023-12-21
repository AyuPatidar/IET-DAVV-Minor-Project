// imports
const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user");
const db = require("../config/db");

const router = express.Router(); // imitialize router

// Create MongoDB User
// Single User
const createMongoUser = async (req, res) => {
  console.log("MongoDB Create User");
  const {
    user_id,
    subscription_type,
    monthly_revenue,
    join_date,
    last_payment_date,
    country,
    age,
    gender,
    device,
    plan_duration,
  } = req.body; // fetch user details from request body
  start = performance.now(); // start time
  const newUser = new User({
    user_id,
    subscription_type,
    monthly_revenue,
    join_date,
    last_payment_date,
    country,
    age,
    gender,
    device,
    plan_duration,
  }); // create user json object based on user model
  try {
    await newUser.save(); // add user to collection
    end = performance.now(); // end time
    console.log(end - start); // total time taken in milliseconds = end - start
    res.json(newUser); // return user
  } catch (error) {
    res.json({ message: error.message });
  }
};
// Multiple Users
const createMultipleMongoUsers = async (req, res) => {
  console.log("MongoDB Create Multiple User");
  const usersArray = req.body; // fetch user details from request body
  try {
    for (var i = 0; i < 10; i++) {
      var newUser = new User({
        user_id: usersArray[i]["User ID"],
        subscription_type: usersArray[i]["Subscription Type"],
        monthly_revenue: usersArray[i]["Monthly Revenue"],
        join_date: usersArray[i]["Join Date"],
        last_payment_date: usersArray[i]["Last Payment Date"],
        country: usersArray[i]["Country"],
        age: usersArray[i]["Age"],
        gender: usersArray[i]["Gender"],
        device: usersArray[i]["Device"],
        plan_duration: usersArray[i]["Plan Duration"],
      });
      await newUser.save();
    }
    res.json({ message: "Users created" }); // return user
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Read MongoDB User
const getMongoUser = async (req, res) => {
  console.log("MongoDB Read User");
  const { id } = req.params; // Fetch user id from req params
  try {
    start = performance.now(); // start time
    const user = await User.findById(id); // find user doc in collection
    end = performance.now(); // end time
    console.log(end - start); // total time taken in milliseconds = end - start
    res.json(user); // return user
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Update MongoDB User
const updateMongoUser = async (req, res) => {
  console.log("MongoDB Update User");
  const { id } = req.params; // fetch user id from req params
  const {
    user_id,
    subscription_type,
    monthly_revenue,
    join_date,
    last_payment_date,
    country,
    age,
    gender,
    device,
    plan_duration,
  } = req.body; // fetch user details from req body
  start = performance.now(); // start time
  // check if user id is valid and present
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.send(`No user with id: ${id}`);
  try {
    const updatedUser = {
      user_id,
      subscription_type,
      monthly_revenue,
      join_date,
      last_payment_date,
      country,
      age,
      gender,
      device,
      plan_duration,
    }; // create user json object based on user model
    await User.findByIdAndUpdate(id, updatedUser); // find the user and update the doc
    end = performance.now(); // end time
    console.log(end - start); // total time taken in milliseconds
    res.json(updatedUser); // return updated user
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Delete MongoDB User
const deleteMongoUser = async (req, res) => {
  console.log("MongoDB Delete User");
  const { id } = req.params; // fetch id from req params
  start = performance.now(); // start time
  // check if user id is valid and present
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.send(`No user with id: ${id}`);
  try {
    await User.findByIdAndDelete(id); // find user and delete the doc
    end = performance.now(); // end time
    console.log(end - start); // total time taken in milliseconds
    res.json("User deleted successfully"); // return deleted message
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Create Firebase User
// Single User
const createFirebaseUser = async (req, res) => {
  console.log("Firebase Create User");
  const {
    user_id,
    subscription_type,
    monthly_revenue,
    join_date,
    last_payment_date,
    country,
    age,
    gender,
    device,
    plan_duration,
  } = req.body; // fetch user details from req body
  try {
    const user = {
      user_id,
      subscription_type,
      monthly_revenue,
      join_date,
      last_payment_date,
      country,
      age,
      gender,
      device,
      plan_duration,
    }; // create user json object
    start = performance.now(); // start time
    const fbResponse = db.collection("users").add(user); // add user json object to collection
    end = performance.now(); // end time
    console.log(end - start); // total time taken in milliseconds
    res.json(fbResponse); // return created user
  } catch (error) {
    res.json({ message: error.message });
  }
};
// Multiple Users
const createMultipleFirebaseUser = async (req, res) => {
  console.log("Firebase Create Multiple Users");
  const usersArray = req.body;
  try {
    for (var i = 0; i < 10; i++) {
      var user = {
        user_id: usersArray[i]["User ID"],
        subscription_type: usersArray[i]["Subscription Type"],
        monthly_revenue: usersArray[i]["Monthly Revenue"],
        join_date: usersArray[i]["Join Date"],
        last_payment_date: usersArray[i]["Last Payment Date"],
        country: usersArray[i]["Country"],
        age: usersArray[i]["Age"],
        gender: usersArray[i]["Gender"],
        device: usersArray[i]["Device"],
        plan_duration: usersArray[i]["Plan Duration"],
      };
      const fbResponse = db.collection("users").add(user);
    }
    res.json({ message: "Users created" }); // return user
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Read Firebase user
const getFirebaseUser = async (req, res) => {
  console.log("Firebase Read User");
  const { id } = req.params; // fetch id of user from req params
  try {
    start = performance.now(); // start time
    // get user from collection
    const userRef = db.collection("users").doc(id);
    const fbresponse = await userRef.get();
    end = performance.now(); // end time
    console.log(end - start); // total time taken in milliseconds
    res.json(fbresponse.data()); // return user
  } catch (error) {
    res.json({ message: error.message });
  }
};

// update firebase user
const updateFirebaseUser = async (req, res) => {
  console.log("Firebase Update User");
  const { id } = req.params; // extract id from req params
  const {
    user_id,
    subscription_type,
    monthly_revenue,
    join_date,
    last_payment_date,
    country,
    age,
    gender,
    device,
    plan_duration,
  } = req.body; // extract user details from req body
  try {
    const user = {
      user_id,
      subscription_type,
      monthly_revenue,
      join_date,
      last_payment_date,
      country,
      age,
      gender,
      device,
      plan_duration,
    }; // create user json object
    start = performance.now(); // start time
    // update user details in collection
    const userRef = db.collection("users").doc(id).update(user);
    const fbresponse = await userRef;
    end = performance.now(); // end time
    console.log(end - start); // total time taken in milliseconds
    res.json(fbresponse); // return updated user
  } catch (error) {
    res.json({ message: error.message });
  }
};

// delete firebase user
const deleteFirebaseUser = async (req, res) => {
  console.log("Firebase Delete User");
  const { id } = req.params; // extract id from req params
  try {
    start = performance.now(); // start time
    const fbresponse = await db.collection("users").doc(id).delete(); // delete user from users collection
    end = performance.now(); // end time
    console.log(end - start); // total time taken in milliseconds
    res.json(fbresponse);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// export functions
module.exports = {
  getMongoUser,
  createMongoUser,
  createMultipleMongoUsers,
  updateMongoUser,
  deleteMongoUser,
  getFirebaseUser,
  createFirebaseUser,
  createMultipleFirebaseUser,
  updateFirebaseUser,
  deleteFirebaseUser,
};
