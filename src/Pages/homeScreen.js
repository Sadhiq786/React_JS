import { useEffect, useState } from "react";
import Header from "../Components/navBar/header";
import axios from "axios";
import "./homeScreen.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Spinner from "../Components/spinners/spinner";

const HomeScreen=()=>{

    const[data, setData] = useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
            if(res.status === 200)
            {
                setData(res.data);
            }
        })
        .catch(err => console.log(err));
    },[])

    return(
        <>
        <Header/>
        <div className="cards-container">
        {
            data.length > 0
            ?
            data.map((eachObject)=>{
                return(
                    <div>
                        <CustomCards data={eachObject}/>
                    </div>
                )
            })
            :
            <Spinner/>
        }
        </div>
        </>
    )
}
export  default HomeScreen;


function CustomCards(props) {
    const{data: {id, image, category, title, description, price} }=props
  return (
    <Card className="custom-cards">
      <Card.Img variant="top" src={image} style={{width:"55%", height:"180px"}} />
      <Card.Body>
      <Card.Title className="price">₹ {price}</Card.Title>
        <Card.Title className="title">{title}</Card.Title>
        <Card.Text style={{fontSize:"9px"}}>{description}</Card.Text>
        <button>
            <Link style={{textDecoration:"none", color:"white"}} to={`/${category}/${id}`}>View Product</Link>
        </button>
      </Card.Body>
    </Card>
  );
}

