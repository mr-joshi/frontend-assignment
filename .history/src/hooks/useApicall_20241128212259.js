import { useCallback, useEffect, useState } from "react";

export const useApiCall = ({ url = "" }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(()=>{
fetch(url).then(resp=>resp.json())
  console.log(data)
},[])


  return { data, isLoading, error };
};