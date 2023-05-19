import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
provider.setCustomParameters();

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid); // format of Doc. Set database, document, collection
  const userSnapshot = await getDoc(userDocRef); // dataSet on firebase.

  //if user data not exist in firebase -> create
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  //if user data exists return userDocRef
  return userDocRef;
};