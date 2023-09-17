// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore ,collection, addDoc  } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPKvOeoRBJJV6yXbZwbjwSRcFOz5uYpEc",
  authDomain: "faiz-naeem.firebaseapp.com",
  databaseURL: "https://faiz-naeem-default-rtdb.firebaseio.com",
  projectId: "faiz-naeem",
  storageBucket: "faiz-naeem.appspot.com",
  messagingSenderId: "1048494592514",
  appId: "1:1048494592514:web:a5c8221754bb778d57cd1b",
  measurementId: "G-JXL2C4095Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export{db ,app,collection,addDoc,getStorage, ref, uploadBytes }