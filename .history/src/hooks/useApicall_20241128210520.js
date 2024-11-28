import { useState } from "react"

const useApicall=({url=""})=>{
  const [data, setData] = useState(null);
  const apiCall=()=>{
    fetch(url).then(data=>data.json()).then()
  }
  

}