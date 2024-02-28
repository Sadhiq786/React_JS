import axios from "axios";
import { Component } from "react";

class CardsTask extends Component{
    constructor()
    {
        super();
        this.state = {
            cards:[],
        }
    }

    componentDidMount=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            this.setState({cards:res.data})
        })
    }

    render()
    {
        return(
            <>
            <div style={maincard}>
                {
                    this.state.cards.map((eachObject)=>{
                        return(
                            <div style={childcard}>
                            <img src={eachObject.image} style={imageStyle} ></img>

                                <div style={childcard1}>
                                    <p style={textstyle}><h6>{eachObject.title}</h6></p>
                                    <p style={textstyle}>{eachObject.price}</p>
                                    <p style={{color:"blue", textAlign:"center", fontWeight:"bold"}}>Rating: {eachObject.rating.rate}</p>
                                    <button style={button}>Click</button>
                                </div>
                            </div>
                        )                        
                    })
                }
            </div>
            </>
        )
    }
}
export  default CardsTask;


const maincard ={
    // border: "2px solid black",
    padding: "10px",
    width: "100%",
    height: "fitContent",
    display: "flex",
    flexWrap : "wrap",
    justifyContent : "center",
    gap : "30px",

};

const childcard = {
    border: "1px solid black",
    width: "340px",
    height: "fitContent",
    paddingTop:"15px",
    // boxShadow: "10px 8px",

}

const childcard1 = {
    width: "338.5px",
    backgroundColor: "lightgrey",
    height: "50%",
}

const imageStyle = {
    display: "block",
    margin: "auto",
    width: "50%",
    height: "50%"

}

const textstyle ={
    textAlign: "center",
}

const button={
    textAlign:"center",
    display:"block",
    margin:"auto",
    padding:"10px",
    width:"30%",
    backgroundColor:"orange",
    color:"white"
}


