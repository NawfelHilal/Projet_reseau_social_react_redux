import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebsa-redux.firebaseapp.com",
  projectId: "react-firebsa-redux",
  storageBucket: "react-firebsa-redux.appspot.com",
  messagingSenderId: "212950291563",
  appId: "1:212950291563:web:6a3b011a2cc089b2b9cd2e",
});

export const auth = app.auth();
export const db = getFirestore();
export default app;
