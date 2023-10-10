import mongoose from "mongoose";

import User from "../models/user";

const epress = require("express");

const router = express.Router();

export const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const { name, username, email, phoneNumber, address } = req.body;

  const newUser = new User({ name, username, email, phoneNumber, address });

  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
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

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await User.findByIdAndDelete(id);
    res.json("Post deleted successfully");
  } catch (error) {
    res.json({ message: error.message });
  }
};

export default router;
