import { useEffect, useState } from "react"

export const useApiCall = ({ url = "" }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiCall = () => {
    setIsLoading(true);
    fetch(url)
    .then(resp => data.json())
    .then(
      resp => {setData(resp)}
    )
    .catch(error=>{
      setError(error);
    })
  }
  useEffect(()=>{
    apiCall();
  },[apiCall, url])
return {data,isLoading,error};
}