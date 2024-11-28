import { useCallback, useEffect, useState } from "react";

export const useApiCall = ({ url = "" }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiCall = useCallback(async () => {
    setIsLoading(true); // Start loading
    console.log("object")
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false); // Stop loading
    }
  });

  useEffect(() => {
    if (url) {
      apiCall();
    }
  }, [url, apiCall]);

  return { data, isLoading, error };
};
