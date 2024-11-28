// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, RecaptchaVerifier } from "firebase/auth";

// Your web app's Firebase configuration
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

// Initialize Firebase Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Firebase Analytics: only initialize if supported and on the client
let analytics: ReturnType<typeof getAnalytics> | undefined;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
      console.log("Firebase Analytics initialized");
    } else {
      console.warn("Firebase Analytics not supported in this environment");
    }
  });
}

export { app, auth, provider, RecaptchaVerifier, analytics };
