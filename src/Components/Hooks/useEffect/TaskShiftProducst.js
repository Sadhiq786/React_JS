import axios from "axios";
import { useEffect, useState } from "react";

const ChangeProducts = ()=>{

    const[count, setCount] = useState(1);
    const[data, setdata] = useState([])

    useEffect(()=>{
        fecthData()
    },[count])

    const handleIncreament=()=>{
        setCount(count+1);
    }

    const fecthData= async()=>{
        const result = await axios.get(`https://dummyjson.com/products/${count}`)
        setdata([result.data]);
        console.log(result.data)
    }

    return(
        <>
            <div style={{
                textAlign:"center"
            }}>
            <ul>
            {
                data.map((items)=>{
                    return(
                        <div style={{
                            width:"50%",
                            height:"",
                            border:"1px solid black",
                            margin:"auto",
                            marginTop:"10px"
                        }}>
                            <img src={items.images[0]}
                            style={{width:"40%",
                                    height:"10%",
                                    display:"block",
                                    margin:"auto",
                                    }}></img><br/>
                            <div style={{textAlign:"center"}}>
                            <h6>Product Name:  {items.title}</h6>
                            <h6>  Brand Name: {items.brand}</h6>
                            <h6>Price: {items.price}</h6>
                            <h6>Rating: {items.rating}</h6>
                            <h6>Description: {items.description}</h6>
                            </div>
                        </div>
                    )
                })
            }
            </ul>
            <h1>Count {count}</h1>
            <button onClick={handleIncreament} style={{width:"150px", padding:"10px"}}>Next</button>
            </div>
        </>
    )
}
export default ChangeProducts;