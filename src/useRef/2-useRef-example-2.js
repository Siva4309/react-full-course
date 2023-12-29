import React, { useEffect, useRef, useState } from "react";

const Index = () => {
  const [firstName, setFirstName] = useState("");
  const inputDom = useRef("");

  useEffect(() => {
    console.log(inputDom);
  });
    
    const focus = () => {
        inputDom.current.focus();
    }
  return (
    <div>
      <h1>Use Ref example</h1>
      <input
        ref={inputDom}
        type="text"
        name="firstName"
        id="firstName"
        onChange={(e) => setFirstName(e.target.value)}
      />
          <h5>Typing: {firstName}</h5>
          <button onClick={focus}>focus</button>
    </div>
  );
};

export default Index;
