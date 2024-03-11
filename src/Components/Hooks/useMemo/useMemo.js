import { useMemo, useState } from "react";


const UseMemoExample = ()=>{

    const[counter1, setCounter1]=useState(1)
    const[counter2, setCounter2]=useState(1)

    const handleCount1=()=>{
        setCounter1(counter1+1)
    }

    
    const handleCount2=()=>{
        setCounter2(counter2+1)
    }
    


    const evenChecker = useMemo(()=>{
        console.log("Even checker calling")

        for(let i=0; i<10000; i++)
        {
            console.log(i)
        }
        return counter1%2===0 ? "Even":"Odd"
    },[counter1])


    return(
        <>
        <h4>Conuter-1 {counter1}</h4>
        <h4>Conuter-2 {counter2}</h4>
        <h4>{evenChecker}</h4>
        <button onClick={handleCount1}>Increament to Counter 1</button>
        <button onClick={handleCount2}>Increament to Counter 2</button>
        </>
    )
}
export default UseMemoExample;