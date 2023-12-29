import React from "react";
import useFetchAPI from "./useFetchAPI";

const URL = "https://jsonplaceholder.typicode.com/posts";

const SecondApi = () => {
  const [postsData, loading, isError] = useFetchAPI(URL);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h3>something was happemd!</h3>;
  }

  return (
    <div>
      <h1>POSTS</h1>
      {/* <h5> {JSON.stringify(postsData)}</h5> */}
      <ul>
        {postsData.map((eachUser) => {
          return <li key={eachUser.id}>{eachUser.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default SecondApi;
