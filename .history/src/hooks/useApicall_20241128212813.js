import { useCallback, useEffect, useState } from "react"

export const useApiCall = ( url = "" ) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

 const apiCall=()=>{
  setIsLoading(true);
  fetch(url)
  .then(response=>response.json())
  .then(response=>setData(response))
  .catch(error=>setError(error));
  
 }

 useEffect(()=>{
apiCall();
 },[url])

return {data,isLoading,error};
}