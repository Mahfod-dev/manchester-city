import React, { useContext, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);
  });

  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
