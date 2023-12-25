import React, { useEffect, useState } from "react";

const Index = () => {
  const [count, setCount] = useState(0);
  // const [toggle, setToggle] = useState(true);
  const [pageWidth, SetPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizehandler =  () => {
      SetPageWidth(window.innerWidth);
      }
    window.addEventListener("resize", resizehandler);
    console.log("Hello iam from useEffect");

    return () => {
      window.removeEventListener("resize", resizehandler);
    };
  });

  return (
    <div>
      <h1>Learn Use Effect</h1>
      {/* <h1 onClick={() => setToggle(!toggle)}>{toggle ? "open" : "close"}</h1> */}
      <h1>{pageWidth}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Index;
