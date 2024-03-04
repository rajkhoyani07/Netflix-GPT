// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAusIiIWgqCmHKrkm6gR0fWHvXnsKSaoaI",
  authDomain: "netflixgpt-81764.firebaseapp.com",
  projectId: "netflixgpt-81764",
  storageBucket: "netflixgpt-81764.appspot.com",
  messagingSenderId: "1027029715708",
  appId: "1:1027029715708:web:aaea39733756a36a222579",
  measurementId: "G-L6E1PN37R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
