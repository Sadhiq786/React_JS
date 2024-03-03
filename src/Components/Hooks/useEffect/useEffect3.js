import { useEffect, useState } from "react"


const UseEffectExample4 = ()=>{

        const [count, setCount] =useState(0)
        
        useEffect(()=>{
            domMannioulation()
        },[count])

        const domMannioulation = ()=>{
            document.title =`Current count ${count}` 
        }

    return(
        <>
        <h2>UseEffect</h2>

        <h3>Current count {count}</h3>
        <button onClick={()=>setCount(count+1)}>Increament</button>
        </>
    )
}
export default  UseEffectExample4;