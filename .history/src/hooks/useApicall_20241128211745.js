import { useCallback, useEffect, useState } from "react"

export const useApiCall = ({ url = "" }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiCall = useCallback(
    ()=>{
      console.log("object")
      fetch(url)
      .then(resp => resp.json())
      .then(
        resp => {
          setData(resp)
        console.log("Dasd")
        }
      )
      .catch(error=>{
        setError(error);
      })
    },
    [ url,data]
  )


  useEffect(()=>{
    apiCall();
  },[url,apiCall])

return {data,isLoading,error};
}