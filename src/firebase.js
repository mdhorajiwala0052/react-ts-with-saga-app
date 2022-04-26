import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9ZlDcGcHei8aa35cMiPDt1cuicNuwuuI",
  authDomain: "react-firebase-auth-5d6c0.firebaseapp.com",
  projectId: "react-firebase-auth-5d6c0",
  storageBucket: "react-firebase-auth-5d6c0.appspot.com",
  messagingSenderId: "696869977573",
  appId: "1:696869977573:web:9e1c9e905b52de649f830c",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider };
