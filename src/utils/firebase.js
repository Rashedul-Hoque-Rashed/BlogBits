// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-2092c.firebaseapp.com",
  projectId: "blog-2092c",
  storageBucket: "blog-2092c.appspot.com",
  messagingSenderId: "877686403102",
  appId: "1:877686403102:web:c586221ee778c682567e0f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);