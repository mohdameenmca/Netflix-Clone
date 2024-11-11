// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGjxt4ZVmguy-LR9QfdUXDMeUFMhT5IgI",
  authDomain: "netflix-clone-e1702.firebaseapp.com",
  projectId: "netflix-clone-e1702",
  storageBucket: "netflix-clone-e1702.firebasestorage.app",
  messagingSenderId: "31152221125",
  appId: "1:31152221125:web:1d9b0a842498c3be8c79ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db= getFirestore();

export {app,auth,db};