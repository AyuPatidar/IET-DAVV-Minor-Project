// imports
const mongoose = require("mongoose");

// define user Schema
const medSchema = mongoose.Schema({
  serial_no: Number,
  description: String,
  medical_specialty: String,
  sample_name: String,
  transcription: String,
  keywords: String,
});

// create user model
const Med = mongoose.model("Med", medSchema);

// export user model
module.exports = Med;
