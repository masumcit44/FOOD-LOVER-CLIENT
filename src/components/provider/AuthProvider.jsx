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
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { useEffect } from "react";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const logIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUp = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleSignUp = () => {
    setLoading(false);
    return signInWithPopup(auth, googleProvider);
  };
  const githubSignUp = () => {
    setLoading(false);
    return signInWithPopup(auth, githubProvider);
  };

  const handleSignOut = () => {
    setUser(null)
    return signOut(auth);
  };

  useEffect(() => {
   onAuthStateChanged(auth, (loggedUser) => {
      if (loggedUser) {
        console.log("state changed", loggedUser);
        setUser(loggedUser);
        setLoading(true);
      }
    });
  }, []);

  const AuthInfo = {
    user,
    logIn,
    signUp,
    googleSignUp,
    githubSignUp,
    loading,
    handleSignOut,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
