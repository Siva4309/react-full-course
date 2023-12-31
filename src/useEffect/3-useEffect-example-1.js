import React, { useState, useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

const Index = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });

  const fetchUsersData = async (apiURL) => {
    setLoading(true);
    setIsError({ status: false, msg: "" });

    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      setUsersData(data);
      setLoading(false);
      setIsError({ status: false, msg: "" });
      if (response.status === 404) {
        throw new Error("Data not found!!");
      }
    } catch (error) {
      setLoading(false);
      setIsError({
        status: true,
        msg: error.message || "something went wrong please try again!",
      });
    }
  };

  useEffect(() => {
    fetchUsersData(URL);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  //(isError && isError.status)
  if (isError?.status) {
    return (
      <div>
        <h1 style={{ color: "red" }}>{isError.msg}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Use effect example-1</h1>
      <ul>
        {usersData.map((eachUser) => {
          const { id, name, email } = eachUser;

          return (
            <li key={id}>
              <div>{name}</div>
              <div>{email}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
