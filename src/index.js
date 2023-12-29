import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import { UserContextProvider } from "./context/userContext";
// import { MainDataContextProvider } from "./context/mainDataContext";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <MainDataContextProvider>
  //   <UserContextProvider>
  //     <App />
  //   </UserContextProvider>
  // </MainDataContextProvider>

  <BrowserRouter>
    <App />
  </BrowserRouter>
);
