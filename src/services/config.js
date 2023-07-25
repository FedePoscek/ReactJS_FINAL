import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// "AIzaSyC_gb_lg7GXHHcyPjg0HsjBVK9uEI0IWfo"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "proyecto-react-electrostore.firebaseapp.com",
  projectId: "proyecto-react-electrostore",
  storageBucket: "proyecto-react-electrostore.appspot.com",
  messagingSenderId: "880430093780",
  appId: "1:880430093780:web:6661f2f14efdd66015f241"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);