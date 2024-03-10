import React, { useReducer, useState } from "react";

const initialState = {
  items: [
    { id: 1, name: "Item 1", price: 20 },
    { id: 2, name: "Item 2", price: 30 },
    { id: 3, name: "Item 3", price: 25 },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_ITEM":
      return {
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    default:
      return state;
  }
}

const CrudOperations = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formData, setFormData] = useState({ id: null, name: "", price: "" });

  const handleAddItem = () => {
    if (formData.name && formData.price) {
      dispatch({
        type: "ADD_ITEM",
        payload: { id: Date.now(), ...formData },
      });
      setFormData({ id: null, name: "", price: "" });
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const handleEditItem = (item) => {
    setFormData(item);
  };

  const handleUpdateItem = () => {
    if (formData.id !== null) {
      dispatch({
        type: "UPDATE_ITEM",
        payload: formData,
      });
      setFormData({ id: null, name: "", price: "" });
    }
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => handleEditItem(item)}>Edit</button>
                <button onClick={() => handleRemoveItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label>Price:</label>
        <input
          type="text"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        {formData.id === null ? (
          <button onClick={handleAddItem}>Add Item</button>
        ) : (
          <button onClick={handleUpdateItem}>Update Item</button>
        )}
      </div>
    </div>
  );
};

export default CrudOperations;
