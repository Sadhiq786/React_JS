import { Table, TableCell, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";


const TableFetchData = ()=>{

    const[data, setData]=useState([])

    useEffect(()=>{
        FetchData()
    },[])

    const FetchData = ()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(response => {
            setData(response.data)
        })
        .catch((error)=>console.log(error))
    }

    return(
        <>
        <Table>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Count</TableCell>
            </TableRow>
            {
                data.map((eachData)=>{
                    return(
                        <TableRow>
                            <TableCell>{eachData.id}</TableCell>
                            <TableCell>{eachData.title}</TableCell>
                            <TableCell>
                                <img src={eachData.image} width={100}/>
                            </TableCell>
                            <TableCell>{eachData.price}</TableCell>
                            <TableCell>{eachData.rating.count}</TableCell>
                        </TableRow>
                    )
                })
            }
        </Table>
        </>
    )
}
export default  TableFetchData;