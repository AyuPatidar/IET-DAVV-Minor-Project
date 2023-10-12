// imports
const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user");
// const { async } = require("@firebase/util");
const admin = require("firebase-admin");
const credentials = require("../key.json");

// imitialize router
const router = express.Router();

// Create MongoDB User
const createMongoUser = async (req, res) => {
  // fetch user details from request body
  const { name, username, email, phoneNumber, address } = req.body;
  // create user json object based on user model
  const newUser = new User({ name, username, email, phoneNumber, address });
  try {
    // add user to collection
    await newUser.save();
    // return user
    res.json(newUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Read MongoDB User
const getMongoUser = async (req, res) => {
  // Fetch user id from req params
  const { id } = req.params;
  try {
    // find user doc in collection
    const user = await User.findById(id);
    // return user
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Update MongoDB User
const updateMongoUser = async (req, res) => {
  // fetch user id from req params
  const { id } = req.params;
  // fetch user details from req body
  const { name, username, email, phoneNumber, address } = req.body;
  // check if user id is valid and present
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.send(`No user with id: ${id}`);
  try {
    // create user json object based on user model
    const updatedUser = { name, username, email, phoneNumber, address };
    // find the user and update the doc
    await User.findByIdAndUpdate(id, updatedUser);
    // return updated user
    res.json(updatedUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Delete MongoDB User
const deleteMongoUser = async (req, res) => {
  // fetch id from req params
  const { id } = req.params;
  // check if user id is valid and present
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.send(`No user with id: ${id}`);
  try {
    // find user and delete the doc
    await User.findByIdAndDelete(id);
    // return deleted message
    res.json("User deleted successfully");
  } catch (error) {
    res.json({ message: error.message });
  }
};

// initialize the firebase app
admin.initializeApp({
  credential: admin.credential.cert(credentials),
});
// connect to firestore
const db = admin.firestore();

// Create Firebase User
const createFirebaseUser = async (req, res) => {
  // fetch user details from req body
  const { name, username, email, phoneNumber, address } = req.body;
  try {
    // create user json object
    const user = { name, username, email, phoneNumber, address };
    // add user json object to collection
    const fbResponse = db.collection("users").add(user);
    // return created user
    res.send(fbResponse);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Read Firebase user
const getFirebaseUser = async (req, res) => {
  try {
  } catch (error) {
    res.json({ message: error.message });
  }
};

// update firebase user
const updateFirebaseUser = async (req, res) => {
  try {
  } catch (error) {
    res.json({ message: error.message });
  }
};

// delete firebase user
const deleteFirebaseUser = async (req, res) => {
  try {
  } catch (error) {
    res.json({ message: error.message });
  }
};

// export functions
module.exports = {
  getMongoUser,
  createMongoUser,
  updateMongoUser,
  deleteMongoUser,
  getFirebaseUser,
  createFirebaseUser,
  updateFirebaseUser,
  deleteFirebaseUser,
};
