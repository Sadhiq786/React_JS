import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Components/spinners/spinner";


const ProductDetail = ()=>{

   const routeInfo = useParams()
    console.log(routeInfo,"Route info")
    const [product, setProduct]= useState([])


    useEffect(()=>{
        FetchData()
    },[routeInfo.id])

     // fetch data relating to the product
    const FetchData=()=>{
        axios.get(`https://fakestoreapi.com/products/${routeInfo.id}`)
        .then(res=>{
            if(res.status===200)
            {
                setProduct(res.data);
            }
        })
        .catch(err => console.error(err));
    }

    return(
        <>
        {
            Object.keys(product).length > 0
            ?
            <>
            <h5>{product.title}</h5>
            <img src={product.image}/>
            <h5 style={{color:"red"}}>₹ {product.price}</h5>
            <h6>{product.description}</h6>

            </>
            :
            <Spinner/>
        }

        </>
    )
}
export default ProductDetail;