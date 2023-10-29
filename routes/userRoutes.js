// imports
const express = require("express");
const {
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
} = require("../controllers/userController");

// initialize router
const router = express.Router();

// define routes
router.post("/mongo", createMongoUser);
router.post("/mongomultiple", createMultipleMongoUsers);
router.get("/mongo/:id", getMongoUser);
router.patch("/mongo/:id", updateMongoUser);
router.delete("/mongo/:id", deleteMongoUser);
router.post("/firebase", createFirebaseUser);
router.post("/firebasemultiple", createMultipleFirebaseUser);
router.get("/firebase/:id", getFirebaseUser);
router.patch("/firebase/:id", updateFirebaseUser);
router.delete("/firebase/:id", deleteFirebaseUser);

// export routes
module.exports = router;
