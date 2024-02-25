import { Component } from "react";


class YoutubeButton extends Component{
    constructor()
    {
        super()
        this.state={
            isSubscribed: false,
            
        }
        
    }

    Subscribe=()=>{
        this.setState(
            {
                isSubscribed: !this.state.isSubscribed,
            }
        )
    }

    render()
            {
        var btnstyle = {
            backgroundColor: "red",
            display : "block",
            margin:"auto",
            color:"white",
            border:"none",
            marginTop:"50px"
        }
        return(

            <div>
                <button onClick={this.Subscribe} style={btnstyle}>{this.state.isSubscribed?"un-subscribe":"please subscribe"}</button>

                {
                    this.state.isSubscribed? <h1>Welcome user</h1> : null
                }
            </div>
        )
    }
}
export default YoutubeButton;