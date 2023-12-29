import React from "react";
import useFetchAPI from "./useFetchAPI";

const URL = "https://jsonplaceholder.typicode.com/users";

const FirstApi = () => {
  const [userData, loading, isError] = useFetchAPI(URL);

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
        {userData.map((eachUser) => {
          return <li key={eachUser.id}>{eachUser.username}</li>;
        })}
      </ul>
    </div>
  );
};

export default FirstApi;
