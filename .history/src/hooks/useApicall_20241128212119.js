import { useCallback, useEffect, useState } from "react";

export const useApiCall = ({ url = "" }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(()=>{
  fetch(url).then(resp=>data.json()).then(
    resp=>
    setData(resp)
  )
  console.log(data)
},[])


  return { data, isLoading, error };
};
