import axios from "axios"
import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"


const UseEffectExample2 = ()=>{

    const [count,SetCount] = useState(0)

    const [data, setData] = useState([])
 
    useEffect(()=>{
            fecthData()
    },[]);


    const fecthData = async ()=>{
        const result = await axios.get("https://dummyjson.com/products/1")
        setData(result.data.products)
    }

    return(
        <>
        <h1>Use Effect Example</h1>
        <h2>{count}</h2>
        <button onClick={()=>SetCount(count+1)}>Increament</button>
        {
            data.length > 0
            ?
            data.map(item=><h4>{item.title}</h4>)
            :
            null
        }
        </>
    )
}
export default UseEffectExample2;