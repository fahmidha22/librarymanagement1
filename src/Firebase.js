import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDBIeHIAZnLbI4A46J1tEPY5t2E5c7Dqk",
  authDomain: "library-management-18783.firebaseapp.com",
  projectId: "library-management-18783",
  storageBucket: "library-management-18783.firebasestorage.app",
  messagingSenderId: "30096390222",
  appId: "1:30096390222:web:2a857c6146de791488eb1f",
  measurementId: "G-51ZYZ5BMK9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);