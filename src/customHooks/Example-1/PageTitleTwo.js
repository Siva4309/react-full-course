import React, { useState} from "react";
import usePageTitle from "./usePageTitle";

const PageTitleTwo = () => {
  const [count, setCount] = useState(0);

    usePageTitle(count);
  return (
    <div>
      <h1>Page Title One</h1>
      <button onClick={() => setCount(count + 1)}>count - {count}</button>
    </div>
  );
};

export default PageTitleTwo;
