import { useEffect, useState } from "react"

const UseEffectExample = ()=>{

    const[counter, setCounter] = useState(0)
    const[counter1, setCounter1] = useState(10)


    // re-renders
    // useEffect(()=>{
    //     console.log("useEffect executed")
    // })

    // component didmount
    // useEffect(()=>{
    //     console.log("useEffect executed")
    // },[])

    // component didUpdate
    useEffect(()=>{
        console.log("useEffect executed")
    },[counter,counter1])


    const handleIncreament = ()=>{
        setCounter(counter+1)
    }

    const handleIncreament2 = ()=>{
        setCounter1(counter1+1)
    }

    return(
        <>
        <h1>Count {counter}</h1>
        <button onClick={handleIncreament}>Increament</button>
        
        <h1>Counter{counter1}</h1>
        <button onClick={handleIncreament2}>Increament 2</button>
        </>
    )
}
export default UseEffectExample;