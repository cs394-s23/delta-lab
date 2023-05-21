import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../firebase";
import { signInWithRedirect } from "firebase/auth";

// Create a context to store the user's authentication state
const UserContext = createContext();

// A custom hook to consume the UserContext
export const useUser = () => useContext(UserContext);

// A higher-order component that provides the UserContext to its children
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      // Listen for auth state changes
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
        console.log("user signed in", user)
      })
     
  
      // Clean up the listener when the component unmounts
      return unsubscribe;
    }, []);

    const signin = () => {
        signInWithRedirect(auth, provider);
    }

    const values = {
        user,
        signin,
    };

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
};