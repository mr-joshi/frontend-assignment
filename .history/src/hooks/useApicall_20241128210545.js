import { useState } from "react"

const useApicall=({url=""})=>{
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const apiCall=()=>{
    fetch(url).then(data=>data.json()).then(
      data=>setData(data);
    )
  }
  

}