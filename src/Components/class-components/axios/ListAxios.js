import axios from "axios";
import { Component } from "react";

class ListofAllItems extends Component{
    constructor()
    {
        super();
        this.state = {
            ListItems: []
        }
    }

    fetchList=()=>{

        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            this.setState({ListItems:res.data})
        })
        .catch((error)=>console.log(error))
    }

    render()
    {
        return(
            <>
            <button onClick={this.fetchList}>Fetch list</button>
            <div>
                {
                    this.state.ListItems.map((Listitem)=>{
                        return(
                            <ol>
                            <li>{Listitem.id}</li>
                            <li>{Listitem.title}</li>
                            <li><img src={Listitem.image} width={30}></img></li>
                            <li>{Listitem.price}</li>
                            <li>{Listitem.rating.count}</li>
                        </ol>
                        )
                    })
                }
            </div>
            
            </>
        )
    }
}

export  default ListofAllItems; 
