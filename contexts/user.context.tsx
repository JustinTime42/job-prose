import React, { createContext, useState, useEffect, SetStateAction, Dispatch } from "react";
import { auth } from "../utils/firebase";
import { User } from "firebase/auth";

interface IUserContext {
  currentUser: User | null,
  setCurrentUser: Dispatch<SetStateAction<User | null>>,
}

export const UserContext = createContext<IUserContext>({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider:React.FC<any> = ( {children} ) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("new user: ", user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
