import { useCallback, useEffect, useState } from "react"

export const useApiCall = ({ url = "" }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

 const apiCall=()=>{
  setIsLoading(true);
  fetch(data)
 }

return {data,isLoading,error};
}