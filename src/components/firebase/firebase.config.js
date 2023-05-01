// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log('enviroment variable', import.meta.env.vite_apikey)
const firebaseConfig = {
  apiKey: "AIzaSyCgKzw_fUfv_BWc2ftANKpvkwb2n2NrJs8",
  authDomain: "simple-firebase-14c39.firebaseapp.com",
  projectId: "simple-firebase-14c39",
  storageBucket: "simple-firebase-14c39.appspot.com",
  messagingSenderId: "1052273193542",
  appId: "1:1052273193542:web:89e0ec11895c93be13d047"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);