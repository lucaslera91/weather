// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9GRtv53u-TRQ6cavRh3C6zkqVXAieUR0",
  authDomain: "weather-ef932.firebaseapp.com",
  projectId: "weather-ef932",
  storageBucket: "weather-ef932.appspot.com",
  messagingSenderId: "546697939920",
  appId: "1:546697939920:web:da12d4dfca648f0cfac7d5",
  measurementId: "G-7QEESLG69Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//const analytics = getAnalytics(app);
const db = getFirestore(app)

export default db
