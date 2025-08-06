// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa1-G6pjZnyXdDfIwPNaWY43Z8tmK7xZg",
  authDomain: "vinicius-e3f03.firebaseapp.com",
  projectId: "vinicius-e3f03",
  storageBucket: "vinicius-e3f03.firebasestorage.app",
  messagingSenderId: "875276150137",
  appId: "1:875276150137:web:1fa125ac6e029959373ba8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const bancoExterno=getFirestore(app);
export {bancoExterno};