import { useState } from "react";

const UseSetExample1 = ()=>{

    const [currentState, updateFunction]= useState(0)

    // increament
    const Increament=(value)=>{
        updateFunction(currentState + value)
    }

    // decreament
    const Decreament=(value)=>{
        updateFunction(currentState - value)
    }

    // reset
    const Reset =()=>{
        updateFunction(0)
    }

    return(
        <>
            <h2>{currentState}</h2>
            <button onClick={()=>Increament(1)}>Increament</button>
            <button onClick={()=>Decreament(1)}>Decreament</button>
            <button onClick={Reset}>Reset</button>

        </>
    )
}
export default  UseSetExample1;