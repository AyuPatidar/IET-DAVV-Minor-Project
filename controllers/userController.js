const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user");

const router = express.Router();

const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const { name, username, email, phoneNumber, address } = req.body;

  const newUser = new User({ name, username, email, phoneNumber, address });

  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, username, email, phoneNumber, address } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);

  try {
    const updatedUser = { name, username, email, phoneNumber, address };

    await User.findByIdAndUpdate(id, updatedUser);

    res.status(200).json(updatedUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);

  try {
    await User.findByIdAndDelete(id);
    res.json("User deleted successfully");
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { getUser, createUser, updateUser, deleteUser };
