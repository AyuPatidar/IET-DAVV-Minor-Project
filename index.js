const express = require("express");
const mongoose = require("mongoose");
const admin = require("firebase-admin");
const credentials = require("./key.json");
// const { initializeApp } = require("firebase/app");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const db = admin.firestore();

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
// };

// const fapp = initializeApp(firebaseConfig);

app.use("/api/v1/user/", userRoutes);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(3000, () => console.log(`Server Running on Port ${3000}`))
  )
  .catch((error) => console.log(`${error} did not connect`));
