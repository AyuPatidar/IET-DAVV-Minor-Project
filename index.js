import express from "express";
const { default: connectToDB } = require("./config/db");
import { userRoutes } from "./routes/userRoutes";
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("api/v1/user/", userRoutes);

PORT = process.env.PORT || 3000;

connectToDB
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((error) => console.error(`Error connecting to Database: ${error}`));
