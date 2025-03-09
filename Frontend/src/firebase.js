// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB2XDWFBzpADbn6XeUsyeAoPwt3WKsTH2w",
  authDomain: "jobify-d0842.firebaseapp.com",
  databaseURL: "https://jobify-d0842-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jobify-d0842",
  storageBucket: "jobify-d0842.firebasestorage.app",
  messagingSenderId: "797687657149",
  appId: "1:797687657149:web:1410f98246509836ac7dd4",
  measurementId: "G-1ZRZEKECSL"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

const analysts = getDatabase(app);

// Default export
export default analysts;
