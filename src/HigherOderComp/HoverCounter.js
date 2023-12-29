import React from "react";
import enhancedCounter from "./enhancedCounter";

function HoverCounter(props) {
  return (
    <div>
      <h3 onMouseEnter={props.incrementCount}>Hovered {props.count} times</h3>
    </div>
  );
}

export default enhancedCounter(HoverCounter);
