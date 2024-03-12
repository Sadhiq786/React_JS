import { useReducer, useState } from "react";


const initialState={
  Fruits: [
    {id: 1, name: "Mango", price: 50},
    {id: 2, name: "Kiwi", price: 60},
    {id: 3, name: "Orange", price: 70},
  ]
}

function reducer(state, action)
{
  switch(action.type)
  {
    case "ADD_FRUITS":
      return{
        Fruits: [...state.Fruits, action.payload],
      };
    case "DELETE_FRUITS":
      return{
        Fruits: [...state.Fruits.filter((items)=>items.id!==action.payload)]
      }
    case  "UPDATE_FRUITS":
      return{
        Fruits: state.Fruits.map((item)=>
        item.id==action.payload.id ? action.payload: item),
      }
    default:
      return state;
  }
}

const CrudOperation = ()=>{

  const [state, dispatch]=useReducer(reducer, initialState)
  const [formData, setFormData]=useState({
    id: null,
    name:"",
    price: ""
  })

  const handleEdit=(item)=>{
    setFormData(item)
  }

  const handleDelete=(id)=>{
    dispatch({
      type: "DELETE_FRUITS",
      payload: id,
    })
  }

  // inputtags
  const handleAddFruits=()=>{
    if(formData.name && formData.price)
    {
      dispatch({
        type:"ADD_FRUITS",
        payload:{
          id:state.Fruits.length + 1,
          name: formData.name,
          price: formData.price,
        }
      });
      setFormData({
        id:null,
        name: "",
        price: ""
      })
    }
  }


  const handleUpdateFruits=()=>{
    if(formData.id!==null){
      dispatch({
        type: "UPDATE_FRUITS",
        payload: formData,
      });
      setFormData({
        id:null,
        name:"",
        price:""
      })
    }
  };


  return(
    <>
    <table>
      <tr>
        <th>ID</th>
        <th>Fruits</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>

      {
        state.Fruits.map((eachFruit)=>{
          return(
            <tr key={eachFruit.id}>
              <td>{eachFruit.id}</td>
              <td>{eachFruit.name}</td>
              <td>{eachFruit.price}</td>
              <td>
                <button onClick={()=>handleEdit(eachFruit)}>Update</button>
                <button onClick={()=>handleDelete(eachFruit.id)}>Delete</button>
              </td>
            </tr>
          )
        })
      }
    </table>

    <div>
      <label>Name:</label>
      <input type="text"
       value={formData.name}
       onChange={(e)=>setFormData({...formData, name: e.target.value})}
       ></input>

       <label>Price:</label>
       <input
       type="text"
       value={formData.price}
       onChange={(e)=>setFormData({...formData, price: e.target.value})}
       ></input>

       {
        formData.id == null
        ?
        <button onClick={handleAddFruits}>Add Fruits</button>
        :
        <button onClick={handleUpdateFruits}>Update</button>
       }
    </div>
    </>
  )
}
export default CrudOperation;