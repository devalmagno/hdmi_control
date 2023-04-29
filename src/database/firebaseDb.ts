import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import Constants from "expo-constants";

const firebaseConfig = {
    apiKey: Constants.expoConfig?.extra?.api_key,
    authDomain: "hdmi-control.firebaseapp.com",
    projectId: "hdmi-control",
    storageBucket: "hdmi-control.appspot.com",
    messagingSenderId: "325441378197",
    appId: "1:325441378197:web:9819bce6a21e5c8ce5c89c",
    measurementId: "G-729EQDQH8H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export {
    app,
    auth,
    db
};