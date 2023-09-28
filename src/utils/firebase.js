// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-93491.firebaseapp.com",
  projectId: "blog-93491",
  storageBucket: "blog-93491.appspot.com",
  messagingSenderId: "596940840588",
  appId: "1:596940840588:web:d8892a469857f666b0a5a9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
