import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZuvDGMSaJunf_6ii8UosPY6sQNr-o5d8",
  authDomain: "boar-d6042.firebaseapp.com",
  databaseURL: "https://boar-d6042.firebaseio.com",
  projectId: "boar-d6042",
  storageBucket: "boar-d6042.appspot.com",
  messagingSenderId: "97299538707",
  appId: "1:97299538707:web:232705d5421931947770e6",
  measurementId: "G-6C5XDWMN1Z"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.database().ref();
export const fireDb = firebase.firestore();