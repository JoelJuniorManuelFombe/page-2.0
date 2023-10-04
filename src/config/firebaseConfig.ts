// Import the functions you need from the SDKs you need
import { getApps, initializeApp,  } from "firebase/app";
import { Auth, getAuth, GoogleAuthProvider } from "firebase/auth"
import { getDatabase } from "firebase/database";
import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import app from "next/app";
import { getFirestore } from "firebase/firestore";
// import { database } from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoQq-fp48nZYTgpLCZPW1oHHk_F4gLE90",
  authDomain: "page-builder-572dd.firebaseapp.com",
  projectId: "page-builder-572dd",
  storageBucket: "page-builder-572dd.appspot.com",
  messagingSenderId: "189702000838",
  appId: "1:189702000838:web:6c1d0a5b87063add3c87c7",
  measurementId: "G-1LGGD545JN",
  databaseURL: "https://page-builder-572dd-default-rtdb.firebaseio.com"
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
const firebase_app = getApps().length === 0 ? firebase.initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(firebase_app);
const googleAuth = new GoogleAuthProvider();
// const database = getDatabase(firebase_app)
// const uid = auth.currentUser?.uid
// const RealtimeDB = getDatabase();
// const firestoreDB = getFirestore(firebase_app);

export { firebaseConfig, app, auth, googleAuth };