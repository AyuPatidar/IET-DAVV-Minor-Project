const express = require("express");
require("dotenv").config();
const app = express();

app.listen(process.env.PORT, function () {
  console.log(`App is running on PORT ${process.env.PORT}`);
});
