import { useCallback, useEffect, useState } from "react"

export const useApiCall = ({ url = "" }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiCall = useCallback(
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
    [ url,data]
  )


  useEffect(()=>{
    apiCall();
  },[url,apiCall])

return {data,isLoading,error};
}