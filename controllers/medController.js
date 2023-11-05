// imports
const express = require("express");
const mongoose = require("mongoose");
const Med = require("../models/med");
const db = require("../config/db");

const router = express.Router(); // initialize router

// Create MongoDB Record
// Single Record
const createMongoRecord = async (req, res) => {
  console.log("MongoDB Create Record");
  const {
    serial_no,
    description,
    medical_specialty,
    sample_name,
    transcription,
    keywords,
  } = req.body; // fetch user details from request body
  start = performance.now(); // start time
  const newRecord = new Med({
    serial_no,
    description,
    medical_specialty,
    sample_name,
    transcription,
    keywords,
  }); // create user json object based on user model
  try {
    await newRecord.save(); // add user to collection
    end = performance.now(); // end time
    console.log(end - start); // total time taken in milliseconds = end - start
    res.json(newRecord); // return user
  } catch (error) {
    res.json({ message: error.message });
  }
};
// Multiple Records
const createMultipleMongoRecords = async (req, res) => {
  console.log("MongoDB Create Multiple Record");
  const recordsArray = req.body; // fetch user details from request body
  try {
    for (var i = 0; i < 20; i++) {
      var newRecord = new Med({
        serial_no: recordsArray[i]["serial_no"],
        description: recordsArray[i]["description"],
        medical_specialty: recordsArray[i]["medical_specialty"],
        sample_name: recordsArray[i]["sample_name"],
        transcription: recordsArray[i]["transcription"],
        keywords: recordsArray[i]["keywords"],
      });
      await newRecord.save();
    }
    res.json({ message: "Records created" }); // return user
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Read MongoDB Record
const getMongoRecord = async (req, res) => {
  console.log("MongoDB Read Record");
  const { id } = req.params; // Fetch user id from req params
  try {
    start = performance.now(); // start time
    const record = await Med.findById(id); // find user doc in collection
    end = performance.now(); // end time
    console.log(end - start); // total time taken in milliseconds = end - start
    res.json(record); // return user
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Update MongoDB Record
const updateMongoRecord = async (req, res) => {
  console.log("MongoDB Update Record");
  const { id } = req.params; // fetch user id from req params
  const {
    serial_no,
    description,
    medical_specialty,
    sample_name,
    transcription,
    keywords,
  } = req.body; // fetch user details from req body
  start = performance.now(); // start time
  // check if user id is valid and present
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.send(`No record with id: ${id}`);
  try {
    const updatedRecord = {
      serial_no,
      description,
      medical_specialty,
      sample_name,
      transcription,
      keywords,
    }; // create user json object based on user model
    await Med.findByIdAndUpdate(id, updatedRecord); // find the user and update the doc
    end = performance.now(); // end time
    console.log(end - start); // total time taken in milliseconds
    res.json(updatedRecord); // return updated user
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Delete MongoDB Record
const deleteMongoRecord = async (req, res) => {
  console.log("MongoDB Delete Record");
  const { id } = req.params; // fetch id from req params
  start = performance.now(); // start time
  // check if user id is valid and present
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.send(`No record with id: ${id}`);
  try {
    await Med.findByIdAndDelete(id); // find user and delete the doc
    end = performance.now(); // end time
    console.log(end - start); // total time taken in milliseconds
    res.json("Record deleted successfully"); // return deleted message
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Create Firebase Record
// Single Record
const createFirebaseRecord = async (req, res) => {
  console.log("Firebase Create Record");
  const {
    serial_no,
    description,
    medical_specialty,
    sample_name,
    transcription,
    keywords,
  } = req.body; // fetch user details from req body
  try {
    const record = {
      serial_no,
      description,
      medical_specialty,
      sample_name,
      transcription,
      keywords,
    }; // create user json object
    start = performance.now(); // start time
    const fbResponse = db.collection("med").add(record); // add user json object to collection
    end = performance.now(); // end time
    console.log(end - start); // total time taken in milliseconds
    res.json(fbResponse); // return created user
  } catch (error) {
    res.json({ message: error.message });
  }
};
// Multiple Records
const createMultipleFirebaseRecord = async (req, res) => {
  console.log("Firebase Create Multiple Records");
  const recordsArray = req.body;
  try {
    for (var i = 0; i < 20; i++) {
      var record = {
        serial_no: recordsArray[i]["serial_no"],
        description: recordsArray[i]["description"],
        medical_specialty: recordsArray[i]["medical_specialty"],
        sample_name: recordsArray[i]["sample_name"],
        transcription: recordsArray[i]["transcription"],
        keywords: recordsArray[i]["keywords"],
      };
      const fbResponse = db.collection("med").add(record);
    }
    res.json({ message: "Records created" }); // return user
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Read Firebase user
const getFirebaseRecord = async (req, res) => {
  console.log("Firebase Read Record");
  const { id } = req.params; // fetch id of user from req params
  try {
    start = performance.now(); // start time
    // get user from collection
    const recordRef = db.collection("med").doc(id);
    const fbresponse = await recordRef.get();
    end = performance.now(); // end time
    console.log(end - start); // total time taken in milliseconds
    res.json(fbresponse.data()); // return user
  } catch (error) {
    res.json({ message: error.message });
  }
};

// update firebase user
const updateFirebaseRecord = async (req, res) => {
  console.log("Firebase Update Record");
  const { id } = req.params; // extract id from req params
  const {
    serial_no,
    description,
    medical_specialty,
    sample_name,
    transcription,
    keywords,
  } = req.body; // extract user details from req body
  try {
    const updatedRecord = {
      serial_no,
      description,
      medical_specialty,
      sample_name,
      transcription,
      keywords,
    }; // create user json object
    start = performance.now(); // start time
    // update user details in collection
    const recordRef = db.collection("med").doc(id).update(updatedRecord);
    const fbresponse = await recordRef;
    end = performance.now(); // end time
    console.log(end - start); // total time taken in milliseconds
    res.json(fbresponse); // return updated user
  } catch (error) {
    res.json({ message: error.message });
  }
};

// delete firebase user
const deleteFirebaseRecord = async (req, res) => {
  console.log("Firebase Delete Record");
  const { id } = req.params; // extract id from req params
  try {
    start = performance.now(); // start time
    const fbresponse = await db.collection("med").doc(id).delete(); // delete user from med collection
    end = performance.now(); // end time
    console.log(end - start); // total time taken in milliseconds
    res.json(fbresponse);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// export functions
module.exports = {
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
};
