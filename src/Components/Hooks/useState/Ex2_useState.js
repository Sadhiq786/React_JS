import { useState } from "react"
import React from "react";



const UsestateExample3=()=>{


      const [fruits, setFruits]=useState(["Apple","Kiwi","Banana","Orange"]); // 2nd argument is

      const addfruits=()=>{
        let newstr =[...fruits,"Dragon fruits"]
        setFruits(newstr)
      }


      const deleteFruits=(index)=>{
        console.log(index, fruits)

      }


    return(
        <>
        <h3>Fruits list</h3>
        <button onClick={addfruits}>Add fruits</button>
        <ol>
            {
                fruits.map((eachFruit,index)=>{
                    return(
                        <React.Fragment key={index}>
                        <li>{eachFruit}</li>
                        <button onClick={()=>deleteFruits(index)}>Delete</button>
                        </React.Fragment>
                        
                        
                    )
                })
            }
        </ol>
        </>
    )
}

export default UsestateExample3;