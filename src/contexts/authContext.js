import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  console.log("Hello");
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  //When user creates new account
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // use this function when user has an account and wants to login
  const loginUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      return err;
    }
  };

  const useToCheckIfUserLoggedIn = () => {
    useEffect(() => {
      const authenticated = onAuthStateChanged(
        auth,
        (currUser) => {
          if (currUser) {
            setUser(currUser);
            setLoading(false);
          } else {
            setUser(null);
          }
        },
        (error) => {
          console.error("Auth state change error:", error);
        }
      );
      return authenticated;
    }, []);
    return user;
  };

  //use this function when user wants to logout
  const logOut = () => {
    return signOut(auth);
  };

  const authValue = {
    createUser,
    user,
    loginUser,
    useToCheckIfUserLoggedIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
