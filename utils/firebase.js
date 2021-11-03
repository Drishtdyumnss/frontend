// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs5VigZCudzSWWGT18pMV2N7c0_Ixz2tY",
  authDomain: "fir-auth-18693.firebaseapp.com",
  projectId: "fir-auth-18693",
  storageBucket: "fir-auth-18693.appspot.com",
  messagingSenderId: "331561811091",
  appId: "1:331561811091:web:ebf906ab76de794bd42166",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();

export { auth };
