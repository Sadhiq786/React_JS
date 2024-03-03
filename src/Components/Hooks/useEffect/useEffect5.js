import { useEffect } from "react";


const UseEffectExample5 = ()=>{
    
    useEffect(()=>{
        window.addEventListener("mousemove",callbackFunction)
    },[])

    const  callbackFunction=(event)=>{
        console.log(event.clientX);
        console.log(event.clientY);
    }

    return(
        <>
        <h1>Hello</h1>
        </>
    )
}
export default UseEffectExample5;