import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC0b1oNL9HhesVpK78q_pt4Sj9Hp1dGXLk",
  authDomain: "pantry-tracker-9f673.firebaseapp.com",
  projectId: "pantry-tracker-9f673",
  storageBucket: "pantry-tracker-9f673.appspot.com",
  messagingSenderId: "933125102974",
  appId: "1:933125102974:web:1ebe02368a98df6f98a72f",
  measurementId: "G-7814SJ8Z40"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

let analytics;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { firestore, analytics };
