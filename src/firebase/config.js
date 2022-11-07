import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "eshop-2bdb5.firebaseapp.com",
  projectId: "eshop-2bdb5",
  storageBucket: "eshop-2bdb5.appspot.com",
  messagingSenderId: "499603569292",
  appId: "1:499603569292:web:58fa3d9ca1c5d9a31c99a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
