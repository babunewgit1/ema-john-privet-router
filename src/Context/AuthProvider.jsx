import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUpwithMail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithMail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const uid = user;
      setUser(uid);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const userContent = {
    user,
    signUpwithMail,
    loginWithMail,
    logOut,
    loading,
  };
  return (
    <AuthContext.Provider value={userContent}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
