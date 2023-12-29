import React from "react";
import enhancedCounter from "./enhancedCounter";

function ClickCounter(props) {
  return (
    <div>
      <button onClick={props.incrementCount}>
        {props.name}Counter clicked {props.count} times
      </button>
    </div>
  );
}

export default enhancedCounter(ClickCounter);
