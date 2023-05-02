import React from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { useEffect } from "react";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const logIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUp = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleSignUp = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubSignUp = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };

  const handleSignOut = () => {
    setUser(null)
    return signOut(auth);
  };



  useEffect(() => {
   onAuthStateChanged(auth, (loggedUser) => {
      if (loggedUser) {
        // console.log("state changed", loggedUser);
        setUser(loggedUser);
        setLoader(false);
      }
    });
  }, []);

  const AuthInfo = {
    user,
    logIn,
    signUp,
    googleSignUp,
    githubSignUp,
    loader,
    handleSignOut,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
