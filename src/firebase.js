// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore, doc, getDoc , updateDoc, setDoc} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";

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



export const provider = new GoogleAuthProvider();
export const auth = getAuth();


let settings = {}
export const db = initializeFirestore(app, settings)

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

    

    return paths;
  } catch (error) {
    console.log(error);
    return null;
  }
}


export async function addTraitsToUsers(uid, traitsArray) {
  const currentDate = new Date();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  const formattedDate = `${month} ${day}, ${year}`;

  const docRef = doc(db, "users", uid);

  const customId = `dates.${formattedDate}`;

  await setDoc(
    docRef,
    {
      dates: {
        [formattedDate]: traitsArray,
      },
    },
    { merge: true } 
  );
}


export async function getDateTraitsByUser(uid, formattedDate) {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.data()) {
      return null;
    }

    const traits = docSnap.data().dates;
   
    return traits[formattedDate];
  } catch (error) {
    console.log(error);
    return null;
  }
}



export async function getDatesByUser(uid) {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.data()) {
      return null;
    }

    const dates = docSnap.data().dates;
    return dates;
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