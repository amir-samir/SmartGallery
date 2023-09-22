// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcpqyuzcmi55TJDpS2WTao8Uo6spiSa4Y",
  authDomain: "thesisprojec-7b283.firebaseapp.com",
  projectId: "thesisprojec-7b283",
  storageBucket: "thesisprojec-7b283.appspot.com",
  messagingSenderId: "491332563290",
  appId: "1:491332563290:web:f0b25067b347e695e78363"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and get Reference to it
export const auth = getAuth(app)