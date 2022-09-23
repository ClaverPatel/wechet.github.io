import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO50g0GkK5VzjxP-y1iUxcma0m-m9-TZE",
  authDomain: "wechat-c442f.firebaseapp.com",
  projectId: "wechat-c442f",
  storageBucket: "wechat-c442f.appspot.com",
  messagingSenderId: "458734765689",
  appId: "1:458734765689:web:992a367566d230525bf6a8",
  measurementId: "G-YH3NF8YPX5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
export const analytics = getAnalytics(app);
