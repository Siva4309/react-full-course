import React, { useEffect, useRef, useState } from "react";

const Index = () => {
  const [firstName, setFirstName] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current += 1;
  });
  return (
    <div>
      <h1>Use Ref example</h1>
      <input
        type="text"
        name="firstName"
        id="firstName"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <h5>Typing: {firstName}</h5>
      <h5>Component renderd {renderCount.current} times</h5>
    </div>
  );
};

export default Index;
