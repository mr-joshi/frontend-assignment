import { useState } from "react"

const useApicall = ({ url = "" }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiCall = () => {
    setLoading(true);
    fetch(url).then(resp => data.json()).then(
      resp => {setData(resp)}
    ).catch(error=>{
      setError(error);
      setLoading(false)
    })
  }

return {data,isLoading}
}