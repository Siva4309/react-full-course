import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { MainDataContext } from "../context/mainDataContext";

const SubChildComponent = () => {
  const data = useContext(UserContext);
  const mainData = useContext(MainDataContext);
  console.log(mainData);

  return (
    <div>
      <h3>SubChildComponent</h3>
      <div>First Name:{data.firstName}</div>
      <div>Last Name:{data.lastName}</div>
      <div>Email:{data.email}</div>
    </div>
  );
};

export default SubChildComponent;
