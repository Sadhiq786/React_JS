import axios from "axios";
import { Component } from "react";



class DataInTable extends Component{

    constructor()
    {
        super();
        this.state = {
            Items : []
        }
    }

    fetchData=()=>{

        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            this.setState({Items:res.data});
        })
        .catch((error)=>console.log(error))
    }


    render()
    {
        return(
            <>
            <button onClick={this.fetchData}>Fetch Data</button>
            <table style={tableStyle}>
                <tr>
                    <th style={headerStyle}>ID</th>
                    <th style={headerStyle}>Title</th>
                    <th style={headerStyle}>Image</th>
                    <th style={headerStyle}>Price</th>
                    <th style={headerStyle}>Count</th>
                </tr>

                {
                    this.state.Items.map((eachObject)=>{
                        return(
                            <tr key={eachObject.id}>
                                <td style={headerStyle}>{eachObject.id}</td>
                                <td style={headerStyle}>{eachObject.title}</td>
                                <td style={headerStyle}><img src={eachObject.image} width={50}></img></td>
                                <td style={headerStyle}>{eachObject.price}</td>
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

export default DataInTable;


const headerStyle={
    border:"2px solid black",
    borderCollapse: "collapse",
    padding: "10px",
    textAlign : "center"
}

const tableStyle = {
    margin: 'auto',
}