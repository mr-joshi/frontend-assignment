import { useState } from "react"

const useApicall = ({ url = "" }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiCall = () => {
    fetch(url).then(resp => data.json()).then(
      resp => {setData(resp)
        setLoading
      }
    ).catch(error=>{
      setError(error);
      setLoading(false)
    })
  }


}