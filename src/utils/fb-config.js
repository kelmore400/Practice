import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCa1rstgt1Tea2eqMyYecmiAmbY0i4-5lg",
  authDomain: "deliveryfood-6aa1a.firebaseapp.com",
  databaseURL: "https://deliveryfood-6aa1a-default-rtdb.firebaseio.com",
  projectId: "deliveryfood-6aa1a",
  storageBucket: "deliveryfood-6aa1a.appspot.com",
  messagingSenderId: "549266254215",
  appId: "1:549266254215:web:a0590c2a0d547564220b22"
};

firebase.initializeApp(firebaseConfig);

export default firebase;