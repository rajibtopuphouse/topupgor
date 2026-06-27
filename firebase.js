// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCO6wt9IIkCWF7BdaTtDtHwl2BwNGWMiF0",
  authDomain: "rajib-top-up-house-bcb4e.firebaseapp.com",
  projectId: "rajib-top-up-house-bcb4e",
  storageBucket: "rajib-top-up-house-bcb4e.firebasestorage.app",
  messagingSenderId: "132908919579",
  appId: "1:132908919579:web:5afdc380d0fcb170a981be",
  measurementId: "G-Z8N94RRSDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut, onAuthStateChanged };
