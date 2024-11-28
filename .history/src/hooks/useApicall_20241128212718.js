import { useCallback, useEffect, useState } from "react"

export const useApiCall = ( url = "" ) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

 const apiCall=()=>{
  setIsLoading(true);
  fetch(url)
  .then(response=>response.json())
  .then(res)
 }

return {data,isLoading,error};
}