// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBapFUoSwuR7XxJLoY9SfmheYJ2V5UFn1M",
  authDomain: "mould-removal-northwest.firebaseapp.com",
  projectId: "mould-removal-northwest",
  storageBucket: "mould-removal-northwest.appspot.com",
  messagingSenderId: "189869950679",
  appId: "1:189869950679:web:d0fcd2ce2f47c79f66d292",
  measurementId: "G-TX8SVW4S2T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const analytics = getAnalytics(app);

export { app, db, auth };
