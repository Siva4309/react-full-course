import React from "react";

const initialState = {
  firstName: "sivaReddy",
  lastName: "Yarragudi",
  email: "siva4309@gmail.com",
};

export const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
  );
};
