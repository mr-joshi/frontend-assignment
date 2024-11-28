import { useState } from "react"

const useApicall=({url=""})=>{
const [apiData,setApiData]=useState([]);
  const apiCall=()=>{
    fetch(url).then(data=>data.json()).then()
  }
  

}