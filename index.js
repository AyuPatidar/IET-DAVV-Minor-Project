// imports
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes.js");
const medRoutes = require("./routes/medRoutes.js");

// initialize app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use routes
app.use("/api/v1/user/", userRoutes);
app.use("/api/v1/med/", medRoutes);

// connect database and then run server
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(3000, () => console.log(`Server Running on Port 3000`))
  )
  .catch((error) => console.log(`${error} did not connect`));
