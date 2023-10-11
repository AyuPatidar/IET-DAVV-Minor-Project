const express = require("express");
const {
  getMongoUser,
  createMongoUser,
  updateMongoUser,
  deleteMongoUser,
  getFirebaseUser,
  createFirebaseUser,
  updateFirebaseUser,
  deleteFirebaseUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/mongo", createMongoUser);
router.get("/mongo/:id", getMongoUser);
router.patch("/mongo/:id", updateMongoUser);
router.delete("/mongo/:id", deleteMongoUser);
router.post("/firebase", createFirebaseUser);
router.get("/firebase/:id", getFirebaseUser);
router.patch("/firebase/:id", updateFirebaseUser);
router.delete("firebase/:id", deleteFirebaseUser);

module.exports = router;
