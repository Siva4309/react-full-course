import React from "react";
import useCounter from "./useCounter";

const SecoundCounter = () => {
    const [count, increment, decrement, reset] = useCounter(0);

  return (
    <div>
      <h1>count == {count}</h1>
      <br />
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
};

export default SecoundCounter;
