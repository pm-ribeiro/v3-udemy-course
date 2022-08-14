// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS1wI2yM_exmq7zutf24_L56JVr_XT3w8",
  authDomain: "notes-app-8fcf5.firebaseapp.com",
  projectId: "notes-app-8fcf5",
  storageBucket: "notes-app-8fcf5.appspot.com",
  messagingSenderId: "818064274552",
  appId: "1:818064274552:web:df05d331575bc8659d298d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const auth = getAuth(app);

export {
  db,
  auth
};