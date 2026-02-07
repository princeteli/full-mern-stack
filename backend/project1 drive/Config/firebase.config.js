const Firebase = require("firebase-admin");

const serviceAccount = require("../drive2-bc9f3-firebase-adminsdk-fbsvc-b4960f0ccd.json");
const firebase = Firebase.initializeApp({
  credential: Firebase.credential.cert(serviceAccount),
  // storageBucket:
});
