// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0oAe_vqq1RVkIfXyA9msokPjU8FHO8hg",
  authDomain: "delta-lab-8ec06.firebaseapp.com",
  projectId: "delta-lab-8ec06",
  storageBucket: "delta-lab-8ec06.appspot.com",
  messagingSenderId: "677227830895",
  appId: "1:677227830895:web:f3c25096c49d2fb256779a",
  measurementId: "G-8XPVYC38HL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let settings = {}
export const db = initializeFirestore(app, settings)

// firebase querying and finding data goes below...
