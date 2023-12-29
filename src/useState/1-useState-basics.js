import React, { useState } from "react";

const Index = () => {
  const [count, SetCount] = useState(0);

  console.log(count);
  console.log(SetCount);

  const incrementCount = () => {
    // SetCount(count + 1)
    SetCount((prevCount) => {
      return prevCount + 1;
    });
    SetCount((prevCount) => prevCount + 1);
  };
  const decrementCount = () => {
    // SetCount(count - 1)
    SetCount((prevCount) => prevCount - 1);
    SetCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>count : {count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default Index;
