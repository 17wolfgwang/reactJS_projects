import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxd3DzQUgj8uY5o65Hnj016QOrLp5_v7I",
  authDomain: "crwn-clothing-db-f1cdf.firebaseapp.com",
  projectId: "crwn-clothing-db-f1cdf",
  storageBucket: "crwn-clothing-db-f1cdf.appspot.com",
  messagingSenderId: "943289547808",
  appId: "1:943289547808:web:43b2d50841ad03f4329045",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
