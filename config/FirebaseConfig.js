// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDngd15a-BA_e3PN2CsTsBk5Ux0xNZt9tw",
  authDomain: "e-commerce-store-d1560.firebaseapp.com",
  projectId: "e-commerce-store-d1560",
  storageBucket: "e-commerce-store-d1560.firebasestorage.app",
  messagingSenderId: "369135043625",
  appId: "1:369135043625:web:e315aaecaf197857bdc838",
  measurementId: "G-BLMPD4B58Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);