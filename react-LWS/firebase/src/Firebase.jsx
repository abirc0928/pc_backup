// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb_w-ff04W0OXpaTdb8jK0wKKvdvG0K5E",
  authDomain: "app-5eb4d.firebaseapp.com",
  projectId: "app-5eb4d",
  storageBucket: "app-5eb4d.appspot.com",
  messagingSenderId: "738108367701",
  appId: "1:738108367701:web:999010c1a5af5af088c5dc",
  measurementId: "G-W0THTH7FLV",
  databaseURL: "https://app-5eb4d-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
