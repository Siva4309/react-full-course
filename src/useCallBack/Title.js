import React from "react";

const Title = () => {
  console.log("Title rendered");
  return <h1>useCallBack demo & React.demo</h1>;
};

export default React.memo(Title);
