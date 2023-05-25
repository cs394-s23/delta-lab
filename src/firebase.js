// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics,isSupported } from "firebase/analytics";
import { initializeFirestore, doc, getDoc , updateDoc, setDoc} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";

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
if (isSupported()) {
  const analytics = getAnalytics(app);
  // Other Firebase Analytics configuration or tracking code
}
// const analytics = getAnalytics(app);


export const provider = new GoogleAuthProvider();
export const auth = getAuth();

/*
getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  */

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

/*
export async function addTraitsToUsers(uid, traitsArray) {
  const currentDate = new Date();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  const formattedDate = `${month} ${day}, ${year}`;

  db.collection('users').doc(uid).get()
  .then(async (docSnapshot) => {
    if (docSnapshot.exists) {
      db.collection('users').doc(uid)
        .onSnapshot(async (doc) => {
          const customId = `dates.${formattedDate}`; // Fix the template literal syntax
          await updateDoc(doc, {
            [customId]: traitsArray, // Use square brackets to use the value of customId as the field name
          });
        });
    } else {
      const customId = `dates.${formattedDate}`;      
      await setDoc(doc(db, "users", uid), {
        [customId]: traitsArray, 
      });
    }
  });

}
*/


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
    { merge: true } // Merge the new data with existing document or create a new one
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
    console.log(traits[formattedDate]);
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
    console.log("HERE")
    console.log(dates);
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