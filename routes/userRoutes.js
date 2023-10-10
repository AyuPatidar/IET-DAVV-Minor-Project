import express from "express";

import {
  getUser,
  updateUser,
  createUser,
  deleteUser,
} from "../controllers/userController";

const router = express.Router;

router.post("/", createUser);
router.get("/:id", getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
