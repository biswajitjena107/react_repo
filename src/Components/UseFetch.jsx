import { useState,useEffect } from "react";



const UseFetch = (url) => {
   const[data,setdata] = useState();
    useEffect(() => {
      fetch(url).then((res) => res.json())
      .then((data) => setdata(data))
    },[])
    return [data]
}

export default UseFetch
