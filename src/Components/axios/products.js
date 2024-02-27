import axios from "axios";

const ProductsApi=()=>{

    // const fetchData=()=>{

    //   using axios
    //   axios.get("https://fakestoreapi.com/products")
    //   .then(response=>console.log(response))
    //   .catch(error=>console.log(error))
    

    //   using fetch
    //   fetch("https://fakestoreapi.com/products")
    //   .then((res=> res.json()))
    //   .then((res=>console.log(res)))    
    //   .catch(error=>console.log(error)) 
    // }


    // using async await
    const fetchData=async()=>{
        // let result = await axios.get("https://fakestoreapi.com/products")
        // console.log(result);


        var response1 = await fetch("https://fakestoreapi.com/products")
        var finalres = await response1.json()
        console.log(finalres)
    }



    return(
        <>
         <button onClick={fetchData}>Fetch Data</button>
        </>
    )
}
export default ProductsApi;