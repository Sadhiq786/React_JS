import { useEffect, useState } from "react";
import Header from "../Components/navBar/header";
import axios from "axios";
import "./homeScreen.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Spinner from "../Components/spinners/spinner";
import useAxios from "../Components/Hooks/customHooks/useAxios";
import { BASE_PROD_URL, endPoints } from "../endpoints/endPoint";

const HomeScreen=()=>{

    const[data]=useAxios(`${BASE_PROD_URL}${endPoints.products}`);
    const[day, setDay] = useState(null)
    useEffect(()=>{
      setDay(getGreeting())
      // setDay(getToday())
    },[])

    function getGreeting()
    {
      const timeInHousrs = new Date().getHours()
      let greeting;
      if(timeInHousrs>6 && timeInHousrs<11)
      {
        greeting = "Good Morning"
      }
      else if(timeInHousrs>=11 && timeInHousrs<=16)
      {
        greeting = "Good Afternoon"
      }
      else if(timeInHousrs>=16 && timeInHousrs<=18)
      {
        greeting = "Good Evening";
      }
      else
      {
        greeting="Good Night";
      }
      return greeting;
    }


    console.log(new Date().getDay())

    function getToday()
    {
      var day;
      switch(new Date().getDay())
      {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
          day ="Tuesday";
          break;
        case 3:
          day="Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
          break
        default :
        day = null
      }

      return day
    }
    // getDay() --> 0, 6
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
                        <h2>{day}</h2>
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

