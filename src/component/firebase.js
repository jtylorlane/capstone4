// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVQRlN26R5E6AJAj4bXZb5BgwQPfhIvg8",
  authDomain: "capstone4-349ff.firebaseapp.com",
  projectId: "capstone4-349ff",
  storageBucket: "capstone4-349ff.appspot.com",
  messagingSenderId: "342912273765",
  appId: "1:342912273765:web:24fbf80800130aa11ba58c",
  measurementId: "G-JNSP0NJ1FX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();

export function signup(email, password) {
createUserWithEmailAndPassword(auth, email, password);
}

export const auth = getAuth(app)
