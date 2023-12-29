import React, { useState } from "react";

const enhancedCounter = (OriginalComponet) => {
  const NewComponent = (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };
    return (
      <OriginalComponet
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };

  return NewComponent;
};

export default enhancedCounter;
