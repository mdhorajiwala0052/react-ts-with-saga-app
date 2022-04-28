// import firebase from "firebase/app";
// import "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import App from "./App";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9ZlDcGcHei8aa35cMiPDt1cuicNuwuuI",
  authDomain: "react-firebase-auth-5d6c0.firebaseapp.com",
  projectId: "react-firebase-auth-5d6c0",
  storageBucket: "react-firebase-auth-5d6c0.appspot.com",
  messagingSenderId: "696869977573",
  appId: "1:696869977573:web:9e1c9e905b52de649f830c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

// const error = new FirebaseError("Error message", {
//   code: "auth/invalid-email",
//   message: "The email address is badly formatted.",
//   name: "Error",
//   stack: "Error: The email address is badly formatted.",
// });
// const googleAuthProvider = new auth.GoogleAuthProvider();
// const facebookAuthProvider = new auth.FacebookAuthProvider();

// export default auth;

// firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();
// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

// export { auth, googleAuthProvider, facebookAuthProvider };
