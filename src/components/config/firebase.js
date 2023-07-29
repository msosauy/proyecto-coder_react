// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9bvDuEJaGT_K_Gqmgi-Knd4gQa5nN194",
  authDomain: "coder-react-2e33a.firebaseapp.com",
  projectId: "coder-react-2e33a",
  storageBucket: "coder-react-2e33a.appspot.com",
  messagingSenderId: "819024660615",
  appId: "1:819024660615:web:e92062dbf725dbbae9d022",
  measurementId: "G-HFV7YTDY3B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);