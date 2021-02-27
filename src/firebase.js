import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSPJ2J3MJZD48kcUGT2tGMYHDDfcVNcq8",
  authDomain: "project-a26f7.firebaseapp.com",
  projectId: "project-a26f7",
  storageBucket: "project-a26f7.appspot.com",
  messagingSenderId: "606907078637",
  appId: "1:606907078637:web:46f9fef671cec9326679e4",
  measurementId: "G-HD91MQWGPS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
  
export { db, auth, provider };
