import { createContext, useContext } from "react";
import {initializeApp} from 'firebase/app'

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
export const useFirebase =()=> useContext(FirebaseContext);

const firebaseApp=initializeApp(firebaseConfig);  //instance of firebase app

//Provider
export const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>;
};
