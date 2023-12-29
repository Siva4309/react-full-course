import React, { useState, useMemo, useEffect } from "react";

const Index = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

    const themeChange = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black",
        };
    }, [dark]);
  const slowFunction = (number) => {
    for (let index = 0; index < 100000000; index++) {}
    console.log("slow theme function");
    return number * 2;
  };
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  useEffect(() => {
    console.log("Theme changed");
  }, [themeChange]);
  return (
    <div>
      <div>
        <h1>Use Memo</h1>
        <input
          type="number"
          name="number"
          id="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
      </div>
      <div>
        <br />
      </div>
      <div>
        <button onClick={() => setDark(!dark)}>change theme</button>
      </div>
      <h2 style={themeChange}>The number : {doubleNumber}</h2>
    </div>
  );
};

export default Index;
