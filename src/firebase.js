import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRd7AawKZn9levJvu4wi5_S7UQ_GonF04",
  authDomain: "clone-95a2c.firebaseapp.com",
  projectId: "clone-95a2c",
  storageBucket: "clone-95a2c.appspot.com",
  messagingSenderId: "841898110992",
  appId: "1:841898110992:web:6dc85aff182fcd19435a95",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };
