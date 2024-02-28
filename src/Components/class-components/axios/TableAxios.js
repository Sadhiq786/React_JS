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
            this.state.Items.push(res.data);
        })
    }


    render()
    {
        return(
            <>
            <button>Fetch Data</button>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th><img src={}></img></th>
                    <th>Price</th>
                    <th>Count</th>
                </tr>

                {
                    this.state.Items.map((eachObject)=>{
                        return(
                            <tr>
                                <td key={eachObject.id}></td>
                            </tr>
                        )
                    })
                }
            </table>
            </>
        )
    }
}