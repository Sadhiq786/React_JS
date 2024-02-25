import { Component } from "react";


// update method (class based components)
class ImageComponent extends Component{

    constructor(){

        super()
        this.state = {
            name:"Sadhiq",
            salary: 30000
        }
    }

    Increament=()=>{
    
        this.setState(
            {
                salary: this.state.salary + 2000
            },
            ()=>{

            }
        )



    }


    render()
    {
        return(

            <div>
                <h3>Hello Everyone {this.state.name} {this.state.salary}</h3>
                <button onClick={this.Increament}>Update</button>
            </div>
        )
    }

}
export default ImageComponent;


// state
