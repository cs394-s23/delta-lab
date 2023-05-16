// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeFirestore, doc, getDoc } from "firebase/firestore";
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

/*
skills: 0-11
returns array of refs [ref1, ref2, ...]
*/
export async function getResourcesBySkill(skill) {
  try {
    const docRef = doc(db, "testSkills", skill);
    const docSnap = await getDoc(docRef);

    if (!docSnap.data()) {
      return null;
    }

    let paths = [];

    docSnap.data().resources.forEach((resource) => {
      paths.push(resource.path);
    });

    //console.log(paths);

    return paths;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getResourceByPath(path) {
  try {
    const docRef = doc(db, path);
    const docSnap = await getDoc(docRef);

    if (!docSnap.data()) {
      return null;
    }

    return docSnap.data();
  } catch (error) {
    console.log(error);
    return null;
  }
}