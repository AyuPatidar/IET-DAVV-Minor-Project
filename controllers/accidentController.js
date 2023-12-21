// imports
const express = require("express");
const mongoose = require("mongoose");
const Accident = require("../models/accident");
const db = require("../config/db");

const router = express.Router(); // initialize router

// Create MongoDB Record
// Single Record
const createMongoRecord = async (req, res) => {
  console.log("MongoDB Create Record");
  const {
    time,
    day_of_week,
    age_band_of_driver,
    sex_of_driver,
    educational_level,
    vehicle_driver_relation,
    driving_experience,
    type_of_vehicle,
    owner_of_vehicle,
    service_year_of_vehicle,
    defect_of_vehicle,
    area_accident_occured,
    lanes_or_medians,
    road_alignment,
    types_of_junction,
    road_surface_type,
    road_surface_conditions,
    light_conditions,
    weather_conditions,
    type_of_collision,
    number_of_vehicles_involved,
    number_of_casualties,
    vehicle_movement,
    casualty_class,
    sex_of_casualty,
    age_band_of_casualty,
    casualty_severity,
    work_of_casuality,
    fitness_of_casuality,
    pedestrian_movement,
    cause_of_accident,
    accident_severity,
  } = req.body; // fetch user details from request body
  start = performance.now(); // start time
  const newRecord = new Accident({
    time,
    day_of_week,
    age_band_of_driver,
    sex_of_driver,
    educational_level,
    vehicle_driver_relation,
    driving_experience,
    type_of_vehicle,
    owner_of_vehicle,
    service_year_of_vehicle,
    defect_of_vehicle,
    area_accident_occured,
    lanes_or_medians,
    road_alignment,
    types_of_junction,
    road_surface_type,
    road_surface_conditions,
    light_conditions,
    weather_conditions,
    type_of_collision,
    number_of_vehicles_involved,
    number_of_casualties,
    vehicle_movement,
    casualty_class,
    sex_of_casualty,
    age_band_of_casualty,
    casualty_severity,
    work_of_casuality,
    fitness_of_casuality,
    pedestrian_movement,
    cause_of_accident,
    accident_severity,
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
    for (var i = 0; i < 50; i++) {
      var newRecord = new Accident({
        time: recordsArray[i]["time"],
        day_of_week: recordsArray[i]["day_of_week"],
        age_band_of_driver: recordsArray[i]["age_band_of_driver"],
        sex_of_driver: recordsArray[i]["sex_of_driver"],
        educational_level: recordsArray[i]["educational_level"],
        vehicle_driver_relation: recordsArray[i]["vehicle_driver_relation"],
        driving_experience: recordsArray[i]["driving_experience"],
        type_of_vehicle: recordsArray[i]["type_of_vehicle"],
        owner_of_vehicle: recordsArray[i]["owner_of_vehicle"],
        service_year_of_vehicle: recordsArray[i]["service_year_of_vehicle"],
        defect_of_vehicle: recordsArray[i]["defect_of_vehicle"],
        area_accident_occured: recordsArray[i]["area_accident_occured"],
        lanes_or_medians: recordsArray[i]["lanes_or_medians"],
        road_alignment: recordsArray[i]["road_alignment"],
        types_of_junction: recordsArray[i]["types_of_junction"],
        road_surface_type: recordsArray[i]["road_surface_type"],
        road_surface_conditions: recordsArray[i]["road_surface_conditions"],
        light_conditions: recordsArray[i]["light_conditions"],
        weather_conditions: recordsArray[i]["weather_conditions"],
        type_of_collision: recordsArray[i]["type_of_collision"],
        number_of_vehicles_involved:
          recordsArray[i]["number_of_vehicles_involved"],
        number_of_casualties: recordsArray[i]["number_of_casualties"],
        vehicle_movement: recordsArray[i]["vehicle_movement"],
        casualty_class: recordsArray[i]["casualty_class"],
        sex_of_casualty: recordsArray[i]["sex_of_casualty"],
        age_band_of_casualty: recordsArray[i]["age_band_of_casualty"],
        casualty_severity: recordsArray[i]["casualty_severity"],
        work_of_casuality: recordsArray[i]["work_of_casuality"],
        fitness_of_casuality: recordsArray[i]["fitness_of_casuality"],
        pedestrian_movement: recordsArray[i]["pedestrian_movement"],
        cause_of_accident: recordsArray[i]["cause_of_accident"],
        accident_severity: recordsArray[i]["accident_severity"],
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
    const record = await Accident.findById(id); // find user doc in collection
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
    time,
    day_of_week,
    age_band_of_driver,
    sex_of_driver,
    educational_level,
    vehicle_driver_relation,
    driving_experience,
    type_of_vehicle,
    owner_of_vehicle,
    service_year_of_vehicle,
    defect_of_vehicle,
    area_accident_occured,
    lanes_or_medians,
    road_alignment,
    types_of_junction,
    road_surface_type,
    road_surface_conditions,
    light_conditions,
    weather_conditions,
    type_of_collision,
    number_of_vehicles_involved,
    number_of_casualties,
    vehicle_movement,
    casualty_class,
    sex_of_casualty,
    age_band_of_casualty,
    casualty_severity,
    work_of_casuality,
    fitness_of_casuality,
    pedestrian_movement,
    cause_of_accident,
    accident_severity,
  } = req.body; // fetch user details from req body
  start = performance.now(); // start time
  // check if user id is valid and present
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.send(`No record with id: ${id}`);
  try {
    const updatedRecord = {
      time,
      day_of_week,
      age_band_of_driver,
      sex_of_driver,
      educational_level,
      vehicle_driver_relation,
      driving_experience,
      type_of_vehicle,
      owner_of_vehicle,
      service_year_of_vehicle,
      defect_of_vehicle,
      area_accident_occured,
      lanes_or_medians,
      road_alignment,
      types_of_junction,
      road_surface_type,
      road_surface_conditions,
      light_conditions,
      weather_conditions,
      type_of_collision,
      number_of_vehicles_involved,
      number_of_casualties,
      vehicle_movement,
      casualty_class,
      sex_of_casualty,
      age_band_of_casualty,
      casualty_severity,
      work_of_casuality,
      fitness_of_casuality,
      pedestrian_movement,
      cause_of_accident,
      accident_severity,
    }; // create user json object based on user model
    await Accident.findByIdAndUpdate(id, updatedRecord); // find the user and update the doc
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
    await Accident.findByIdAndDelete(id); // find user and delete the doc
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
    time,
    day_of_week,
    age_band_of_driver,
    sex_of_driver,
    educational_level,
    vehicle_driver_relation,
    driving_experience,
    type_of_vehicle,
    owner_of_vehicle,
    service_year_of_vehicle,
    defect_of_vehicle,
    area_accident_occured,
    lanes_or_medians,
    road_alignment,
    types_of_junction,
    road_surface_type,
    road_surface_conditions,
    light_conditions,
    weather_conditions,
    type_of_collision,
    number_of_vehicles_involved,
    number_of_casualties,
    vehicle_movement,
    casualty_class,
    sex_of_casualty,
    age_band_of_casualty,
    casualty_severity,
    work_of_casuality,
    fitness_of_casuality,
    pedestrian_movement,
    cause_of_accident,
    accident_severity,
  } = req.body; // fetch user details from req body
  try {
    const record = {
      time,
      day_of_week,
      age_band_of_driver,
      sex_of_driver,
      educational_level,
      vehicle_driver_relation,
      driving_experience,
      type_of_vehicle,
      owner_of_vehicle,
      service_year_of_vehicle,
      defect_of_vehicle,
      area_accident_occured,
      lanes_or_medians,
      road_alignment,
      types_of_junction,
      road_surface_type,
      road_surface_conditions,
      light_conditions,
      weather_conditions,
      type_of_collision,
      number_of_vehicles_involved,
      number_of_casualties,
      vehicle_movement,
      casualty_class,
      sex_of_casualty,
      age_band_of_casualty,
      casualty_severity,
      work_of_casuality,
      fitness_of_casuality,
      pedestrian_movement,
      cause_of_accident,
      accident_severity,
    }; // create user json object
    start = performance.now(); // start time
    const fbResponse = db.collection("accident").add(record); // add user json object to collection
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
    for (var i = 0; i < 50; i++) {
      var record = {
        time: recordsArray[i]["time"],
        day_of_week: recordsArray[i]["day_of_week"],
        age_band_of_driver: recordsArray[i]["age_band_of_driver"],
        sex_of_driver: recordsArray[i]["sex_of_driver"],
        educational_level: recordsArray[i]["educational_level"],
        vehicle_driver_relation: recordsArray[i]["vehicle_driver_relation"],
        driving_experience: recordsArray[i]["driving_experience"],
        type_of_vehicle: recordsArray[i]["type_of_vehicle"],
        owner_of_vehicle: recordsArray[i]["owner_of_vehicle"],
        service_year_of_vehicle: recordsArray[i]["service_year_of_vehicle"],
        defect_of_vehicle: recordsArray[i]["defect_of_vehicle"],
        area_accident_occured: recordsArray[i]["area_accident_occured"],
        lanes_or_medians: recordsArray[i]["lanes_or_medians"],
        road_alignment: recordsArray[i]["road_alignment"],
        types_of_junction: recordsArray[i]["types_of_junction"],
        road_surface_type: recordsArray[i]["road_surface_type"],
        road_surface_conditions: recordsArray[i]["road_surface_conditions"],
        light_conditions: recordsArray[i]["light_conditions"],
        weather_conditions: recordsArray[i]["weather_conditions"],
        type_of_collision: recordsArray[i]["type_of_collision"],
        number_of_vehicles_involved:
          recordsArray[i]["number_of_vehicles_involved"],
        number_of_casualties: recordsArray[i]["number_of_casualties"],
        vehicle_movement: recordsArray[i]["vehicle_movement"],
        casualty_class: recordsArray[i]["casualty_class"],
        sex_of_casualty: recordsArray[i]["sex_of_casualty"],
        age_band_of_casualty: recordsArray[i]["age_band_of_casualty"],
        casualty_severity: recordsArray[i]["casualty_severity"],
        work_of_casuality: recordsArray[i]["work_of_casuality"],
        fitness_of_casuality: recordsArray[i]["fitness_of_casuality"],
        pedestrian_movement: recordsArray[i]["pedestrian_movement"],
        cause_of_accident: recordsArray[i]["cause_of_accident"],
        accident_severity: recordsArray[i]["accident_severity"],
      };
      const fbResponse = db.collection("accident").add(record);
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
    const recordRef = db.collection("accident").doc(id);
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
    time,
    day_of_week,
    age_band_of_driver,
    sex_of_driver,
    educational_level,
    vehicle_driver_relation,
    driving_experience,
    type_of_vehicle,
    owner_of_vehicle,
    service_year_of_vehicle,
    defect_of_vehicle,
    area_accident_occured,
    lanes_or_medians,
    road_alignment,
    types_of_junction,
    road_surface_type,
    road_surface_conditions,
    light_conditions,
    weather_conditions,
    type_of_collision,
    number_of_vehicles_involved,
    number_of_casualties,
    vehicle_movement,
    casualty_class,
    sex_of_casualty,
    age_band_of_casualty,
    casualty_severity,
    work_of_casuality,
    fitness_of_casuality,
    pedestrian_movement,
    cause_of_accident,
    accident_severity,
  } = req.body; // extract user details from req body
  try {
    const updatedRecord = {
      time,
      day_of_week,
      age_band_of_driver,
      sex_of_driver,
      educational_level,
      vehicle_driver_relation,
      driving_experience,
      type_of_vehicle,
      owner_of_vehicle,
      service_year_of_vehicle,
      defect_of_vehicle,
      area_accident_occured,
      lanes_or_medians,
      road_alignment,
      types_of_junction,
      road_surface_type,
      road_surface_conditions,
      light_conditions,
      weather_conditions,
      type_of_collision,
      number_of_vehicles_involved,
      number_of_casualties,
      vehicle_movement,
      casualty_class,
      sex_of_casualty,
      age_band_of_casualty,
      casualty_severity,
      work_of_casuality,
      fitness_of_casuality,
      pedestrian_movement,
      cause_of_accident,
      accident_severity,
    }; // create user json object
    start = performance.now(); // start time
    // update user details in collection
    const recordRef = db.collection("accident").doc(id).update(updatedRecord);
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
    const fbresponse = await db.collection("accident").doc(id).delete(); // delete user from accident collection
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
