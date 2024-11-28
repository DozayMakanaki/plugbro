// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, RecaptchaVerifier } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT5vc6VDg73nr-oLhLB3zIw3xV5WEUuF0",
  authDomain: "plugbro-38bde.firebaseapp.com",
  projectId: "plugbro-38bde",
  storageBucket: "plugbro-38bde.firebasestorage.app",
  messagingSenderId: "706846631759",
  appId: "1:706846631759:web:27ac0b90eb625f716a873a",
  measurementId: "G-JYBGNWGL59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, RecaptchaVerifier };