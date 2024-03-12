import { useReducer, useState } from "react";


const initialState=[
    {
        id: 1,
        name: "Mango",
        price: 45
    },
    {
        id:2,
        name:"Kiwi",
        price: 65
    }
]

function reducer(state, action){
    switch(action.type)
    {
        case "ADD_FRUIT":
            return [...state, action.Fruits];
        case "DELETE_FRUIT":
            return  state.filter((fruit)=> fruit.id !== action.id);
        case "UPDATE_FRUIT":
            return state.map((fruit)=>
                fruit.id===action.id ? action.updatedFruit : fruit
            )
        default:
            return state;
    }
}


const CRUDTask = ()=>{

    const[currentState, dispatch]=useReducer(reducer, initialState)
    const[updatedFruit, setUpdateFruit] = useState(null)

    const handleUpdate=(id)=>{
       const updatedFruit = currentState.find((fruits)=>fruits.id===id)
       setUpdateFruit(updatedFruit)
    }

    const handleDelete=(id)=>{
        dispatch(
            {
                type:"DELETE_FRUIT",
                id: id,
            }
        )
    }


    const handleSubmit = (event)=>{
        event.preventDefault();
        let name = event.target[0].value;
        let price = event.target[1].value;

        if(updatedFruit)
        {
            dispatch({
                type:"UPDATE_FRUIT",
                id: updatedFruit.id,
                updatedFruit: {
                    ...updatedFruit,
                    name : name,
                    price : Number(price)
                }
            })
            setUpdateFruit(null)
        }
        else
        {
            dispatch(
                {
                    type:"ADD_FRUIT",
                    Fruits:{
                        id: currentState.length + 1,
                        name: name,
                        price: Number(price)
                    }

                    
                }
            )
        }
        event.target.reset()
    }

    

    return(
        <>
        <table>
            <tr>
                <th>ID</th>
                <th>Fruits</th>
                <th>Price</th>
                <th>Action</th>
            </tr>

            {
                currentState.map((eachObject)=>{
                    return(
                        <tr key={eachObject.id}>
                            <td>{eachObject.id}</td>
                            <td>{eachObject.name}</td>
                            <td>{eachObject.price}</td>
                            <td>
                                <button onClick={() => handleUpdate(eachObject.id)}>Update</button>
                                <button onClick={()=>handleDelete(eachObject.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </table>

        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Item" defaultValue={updatedFruit ? updatedFruit.name : ""}></input>
                <input type="text" placeholder="Price" defaultValue={updatedFruit ? updatedFruit.price : ""}></input>
                <button  type='submit'>Add</button>
            </form>
        </div>
        </>
    )
}
export  default CRUDTask;
