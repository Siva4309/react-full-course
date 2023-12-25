import React, { useEffect, useState } from "react";

const Index = () => {
  const [count, setCount] = useState(0);

    useEffect(() => {
      console.log("Hello iam from useEffect");
    }, []);

  return (
    <div>
      <h1>Learn Use Effect</h1>
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
