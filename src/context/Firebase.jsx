import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAq_LrnIXJvYEnTljRd6dxKhUXlZqhwAA4",

  authDomain: "bookify-e7408.firebaseapp.com",

  projectId: "bookify-e7408",

  storageBucket: "bookify-e7408.appspot.com",

  messagingSenderId: "744902625541",

  appId: "1:744902625541:web:80d184c0bdcfdb818a8f6c",
};

//custom hook
export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig); //instance of firebase app
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

//Provider
export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(
      firebaseAuth,
      (user) => {
        if (user) setUser(user);
        else setUser(null);
        console.log("User", user);
      },
      []
    );
  });
  // Function to create user
  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  // Function to sign in user
  const signinUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signInWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  const isLogedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        signinUserWithEmailAndPassword,
        signInWithGoogle,
        isLogedIn,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
