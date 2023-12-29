import React from "react";

const initialState = [
  {
    firstName: "SivaReddy",
    lastName: "Yarragudi",
    email: "siva4309@gmail.com",
  },
  {
    firstName: "Chandrakala",
    lastName: "Yarragudi",
    email: "siva4309@gmail.com",
  },
  {
    firstName: "Varshitha",
    lastName: "Yarragudi",
    email: "siva4309@gmail.com",
  },
];

export const MainDataContext = React.createContext();

export const MainDataContextProvider = ({ children }) => {
  return (
    <MainDataContext.Provider value={initialState}>
      {children}
    </MainDataContext.Provider>
  );
};
