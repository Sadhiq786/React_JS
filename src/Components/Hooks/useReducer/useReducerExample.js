import React, { useReducer } from "react";

function reduce(state, action)
{
    console.log(action,state)

    switch(action.type)
    {
        case "INCREAMENT_AGE_BY_10":
            return {...state, age: state.age+10}
        
        case "DECREAMENT_AGE_BY_20":
            return {...state, age: state.age -20}
        
        case "CHANGE_THE_NAME":
            return {...state, name: "Sameer"}
        
        case "ADD_FRUITS":
            return {...state, fruits:[...state.fruits,"Orange"]}
        default:
            return state
    }
}

const initialState={
    age: 90,
    name: "Sadhiq",
    fruits: ["apple", "kiwi", "Mango"]
}

const UseReducer = ()=>{
    
    const[currentState, dispatch]=useReducer(reduce, initialState)
    const IncreamentAge=()=>{
        dispatch(
            {
                type:"INCREAMENT_AGE_BY_10"
            }
        )
    }

    const DecreamentAge = ()=>{
        dispatch(
            {
                type:"DECREAMENT_AGE_BY_20"
            }
        )
    }

    const changeName=()=>{
        dispatch(
            {
                type: "CHANGE_THE_NAME"
            }
        )
    }

    const addFruits=()=>{
        dispatch(
            {
                type : "ADD_FRUITS"
            }
        )
    }

    return(
        <>
        <h1>UseReducer</h1>
        <h5>{currentState.age}</h5>
        <h5>{currentState.name}</h5>
        <h5>Fruits:</h5>
        <ul>
            {
                currentState.fruits.map((eachFruit, index)=>{
                    return (
                        <li key={index}>{eachFruit}</li>
                    )
                })
            }
        </ul>

        <button onClick={IncreamentAge}>Increament age by 10</button>
        <button onClick={DecreamentAge}>Decreament age by 20</button>
        <button onClick={changeName}>Change Name</button>
        <button onClick={addFruits}>Add Fruits</button>
        </>
    )
}
export default UseReducer;