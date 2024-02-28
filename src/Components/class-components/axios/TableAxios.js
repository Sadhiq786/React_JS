import { Component } from "react";
import axios from "axios";



class DataInTable extends Component{

    constructor()
    {
        super();
        this.state = {
            Items : []
        }
    }

    fetchData=()=>{

        axios .get("https://fakestoreapi.com/products")
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
            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th><img src></img></th>
                    <th>Price</th>
                    <th>Count</th>
                </tr>

                {
                    this.state.Items.map((eachObject)=>{
                        return(
                            <tr key={eachObject.id}>
                                <td>{eachObject.id}</td>
                                <td>{eachObject.title}</td>
                                <td><img src={eachObject.image}></img></td>
                                <td>{eachObject.price}</td>
                                <td>{eachObject.count}</td>
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