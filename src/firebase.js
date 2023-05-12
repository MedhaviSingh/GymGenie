
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyALbtc6eVOvi7bgjM8D8qocIxeBpAKpu6s",
  authDomain: "gymwebsite-fe572.firebaseapp.com",
  projectId: "gymwebsite-fe572",
  storageBucket: "gymwebsite-fe572.appspot.com",
  messagingSenderId: "17762995644",
  appId: "1:17762995644:web:2830211f1fa3d31e59afb9",
  measurementId: "G-6B1Q817MZ6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);