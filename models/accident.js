// imports
const mongoose = require("mongoose");

// define user Schema
const accidentSchema = mongoose.Schema({
  time: String,
  day_of_week: String,
  age_band_of_driver: String,
  sex_of_driver: String,
  educational_level: String,
  vehicle_driver_relation: String,
  driving_experience: String,
  type_of_vehicle: String,
  owner_of_vehicle: String,
  service_year_of_vehicle: String,
  defect_of_vehicle: String,
  area_accident_occured: String,
  lanes_or_Medians: String,
  road_allignment: String,
  types_of_Junction: String,
  road_surface_type: String,
  road_surface_conditions: String,
  light_conditions: String,
  weather_conditions: String,
  type_of_collision: String,
  number_of_vehicles_involved: Number,
  number_of_casualties: Number,
  vehicle_movement: String,
  casualty_class: String,
  sex_of_casualty: String,
  age_band_of_casualty: String,
  casualty_severity: String,
  work_of_casuality: String,
  fitness_of_casuality: String,
  pedestrian_movement: String,
  cause_of_accident: String,
  accident_severity: String,
});

// create user model
const Accident = mongoose.model("Accident", accidentSchema);

// export user model
module.exports = Accident;
