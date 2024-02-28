import { useRef, useState } from "react"


const Timer_Example = ()=>{

        const [Timer, setTimer]=useState(0)
        const current_time = useRef(null);

        //  Start the timer
        const TimeRunning=()=>{
            current_time.running = setInterval(()=>{
                setTimer(Timer=>Timer+1)
            },1000)
        }

        //  Stop the timer 
        const stopTime=()=>{
            clearInterval(current_time.running)
        }
    return(
        <div>
           <h5>{Timer}</h5>
           <button onClick={TimeRunning}>Change time</button>
           <button onClick={stopTime}>Stop time</button>  
        </div>
        
    )
    
}
export default  Timer_Example;