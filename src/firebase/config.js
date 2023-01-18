// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE0__YNDr8i_kVBfvdDqPbkWwMNtzbpIg",
  authDomain: "reactjs-anmai-crochet.firebaseapp.com",
  projectId: "reactjs-anmai-crochet",
  storageBucket: "reactjs-anmai-crochet.appspot.com",
  messagingSenderId: "571126487341",
  appId: "1:571126487341:web:519fb7965154b89999dba4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)