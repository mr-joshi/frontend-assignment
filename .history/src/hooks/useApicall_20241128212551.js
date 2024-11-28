import { useCallback, useEffect, useState } from "react"

export const useApiCall = ({ url = "" }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiCall = (
    ()=>{
      setIsLoading(true);
      fetch(url)
      .then(resp => resp.json())
      .then(
        resp => {
          console.log(resp)
          setData(resp)
        }
      )
    
    },
  

  useEffect(()=>{
    apiCall();
  },[url])

return {data,isLoading,error};
}