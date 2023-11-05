const admin = require("firebase-admin");
const credentials = require("../key.json");

// initialize the firebase app
admin.initializeApp({
  credential: admin.credential.cert(credentials),
});
// connect to firestore
const db = admin.firestore();

module.exports = db;
