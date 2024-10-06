import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const fireKey = import.meta.env.VITE_API_FIRE_KEY;
const firebaseConfig = {
  apiKey: fireKey,
  authDomain: "crediform.firebaseapp.com",
  projectId: "crediform",
  storageBucket: "crediform.appspot.com",
  messagingSenderId: "358204239601",
  appId: "1:358204239601:web:ff0938464f97ca48cdc350",
  measurementId: "G-QMRFT5FL6N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googlAuthProvider = new GoogleAuthProvider();