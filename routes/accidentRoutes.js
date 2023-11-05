// imports
const express = require("express");
const {
  getMongoRecord,
  createMongoRecord,
  createMultipleMongoRecords,
  updateMongoRecord,
  deleteMongoRecord,
  getFirebaseRecord,
  createFirebaseRecord,
  createMultipleFirebaseRecord,
  updateFirebaseRecord,
  deleteFirebaseRecord,
} = require("../controllers/accidentController");

// initialize router
const router = express.Router();

// define routes
router.post("/mongo", createMongoRecord);
router.post("/mongomultiple", createMultipleMongoRecords);
router.get("/mongo/:id", getMongoRecord);
router.patch("/mongo/:id", updateMongoRecord);
router.delete("/mongo/:id", deleteMongoRecord);
router.post("/firebase", createFirebaseRecord);
router.post("/firebasemultiple", createMultipleFirebaseRecord);
router.get("/firebase/:id", getFirebaseRecord);
router.patch("/firebase/:id", updateFirebaseRecord);
router.delete("/firebase/:id", deleteFirebaseRecord);

// export routes
module.exports = router;
