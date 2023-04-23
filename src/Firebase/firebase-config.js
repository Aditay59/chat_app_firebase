// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider}  from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKW-g8DKO4peh7z1l7CrOOBUYXwhThRwk",
  authDomain: "chatapp-6554e.firebaseapp.com",
  projectId: "chatapp-6554e",
  storageBucket: "chatapp-6554e.appspot.com",
  messagingSenderId: "547776796416",
  appId: "1:547776796416:web:c0395b34a2e1106e4245e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);