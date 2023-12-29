import { useState, useEffect } from "react";

function useFetchAPI(apiURL) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const makeAPICall = async (apiURL) => {
    setLoading(true);
    setIsError(false);
    try {
      const response = await fetch(apiURL);
      const comingData = await response.json();
      setData(comingData);
      setLoading(false);
      setIsError(false);
    } catch (error) {
      setLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    makeAPICall(apiURL);
  }, []);

  return [data, loading, isError];
}

export default useFetchAPI;
