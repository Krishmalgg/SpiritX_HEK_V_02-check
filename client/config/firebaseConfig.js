

import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase configuration using .env variables
const firebaseConfig = {
  apiKey: "AIzaSyBsgYDPg_Z8n7Dt2anbzzWdMpCugPlYnz8",
  authDomain: "fir-4f834.firebaseapp.com",
  projectId: "fir-4f834",
  storageBucket: "fir-4f834.firebasestorage.app",
  messagingSenderId: "509294714250",
  appId: "1:509294714250:web:8409aab71c7972bdecfc73",
  measurementId: "G-EJ397N7LH5"
};

// Initialize Firebase
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Initialize Firebase Auth
const firebaseAuth = getAuth(app);

// Initialize Firestore
const firestoreDB = getFirestore(app);
const firebaseStorage = getStorage(app);

export { app, firebaseAuth, firestoreDB, firebaseStorage,firebaseConfig,signInWithEmailAndPassword };

