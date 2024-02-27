import axios from "axios";
import { Component } from "react";



class APIData extends Component{
    constructor()
    {
        super()
        {
            this.state={
                listofitems: [],
                showTable : false,
            };
        }
    }
    fetchData=()=>{

        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            this.setState({listofitems:res.data, showTable:true})
        })
        .catch((error)=>console.log(error))

    }


    render()
    {
        return(
            <>
            <button onClick={this.fetchData} style={btn}>Fetch Data</button>
                <table style={{...tableStyle,display: this.state.showTable ?  'block' : 'none'}} >
                    <tr>
                        <th style={headerStyle}>ID</th>
                        <th style={headerStyle}>Title</th>
                        <th style={headerStyle}>Price</th>
                        <th style={headerStyle}>Image</th>
                        <th style={headerStyle}>Coun</th>
                    </tr>

                    {
                        this.state.listofitems.map((eachObject)=>{
                            return(
                                
                                <tr key={eachObject.id}> 
                                <td style={headerStyle}>{eachObject.id}</td>
                                <td style={headerStyle}>{eachObject.title}</td>
                                <td style={headerStyle}>{eachObject.price}</td>
                                <td style={headerStyle}><img src={eachObject.image} width={50}></img></td>
                                <td style={headerStyle}>{eachObject.rating.count}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </>
        )
    }
}

export default APIData;


const headerStyle = {
    border: "2px solid black",
    padding : "12px"
}

const tableStyle = {
    width:"80%",
    textAlign: "center",
    borderCollapse: "collapse",
    display:"none",
    marginLeft:"15%"
}

const btn={
    padding: "10px",
    backgroundColor: "#f39c12",
    color:"whitesmoke", 
}

