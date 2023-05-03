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
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { useEffect } from "react";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loaderData, setLoaderData] = useState(true);
  const logIn = (email, password) => {
    setLoaderData(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUp = (email, password) => {
    setLoaderData(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleSignUp = () => {
    setLoaderData(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubSignUp = () => {
    setLoaderData(true);
    return signInWithPopup(auth, githubProvider);
  };

  const handleSignOut = () => {
    setLoaderData(true);
    return signOut(auth);
  };

  const handleUpdateUser = (name,url) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("state changed", loggedUser);
      setUser(loggedUser);
      setLoaderData(false);
    });
    return () => {
      unsubcribe();
    };
  }, []);

  const AuthInfo = {
    user,
    logIn,
    signUp,
    googleSignUp,
    githubSignUp,
    loaderData,
    handleSignOut,
    handleUpdateUser
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
