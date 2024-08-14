// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0b1oNL9HhesVpK78q_pt4Sj9Hp1dGXLk",
  authDomain: "pantry-tracker-9f673.firebaseapp.com",
  projectId: "pantry-tracker-9f673",
  storageBucket: "pantry-tracker-9f673.appspot.com",
  messagingSenderId: "933125102974",
  appId: "1:933125102974:web:1ebe02368a98df6f98a72f",
  measurementId: "G-7814SJ8Z40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app);

export {firestore}