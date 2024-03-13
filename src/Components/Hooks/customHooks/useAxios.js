import axios from "axios";
import { useEffect, useState } from "react";



const useAxios = (url)=>{

   const[data, setData]=useState([])

    useEffect(()=>{
        axios.get(url)
        .then((res)=>{

            if(res.status==200)
            {
                setData(res.data)
            }
        })
        .catch((error)=>console.log(error))
    },[])
    return [data]

    return(
        <>

        </>
    )

}
export default useAxios;