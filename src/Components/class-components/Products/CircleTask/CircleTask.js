const { Component } = require("react");


class CircleCreate extends Component{
    state={
        circles:[]
    }

    addCircles=()=>{
        this.setState(
            {
                circles:[...this.state.circles, false]
            }
        )
    }


    changeColor=(index)=>{
        console.log(index,this.state.circles);
    }


    render()
    {
        return(
            <>
            <button onClick={this.addCircles}>Add Circles</button>
            <h1>Total Circles -- {this.state.circles.length} </h1>
            {
                this.state.circles.map((element,index)=><Circle  ColorHighlight={element} changeColor={this.changeColor} index={index}/>)
            }
            </>

        )
    }
}
export default CircleCreate;


class Circle extends Component{
    render()
    {
        console.log(this.props.ColorHighlight)
        return(
            <div style={{width:100, display:"inline-block", height:100, border: "2px solid black", borderRadius:"50%", backgroundColor:this.props.ColorHighlight?"lightblue":null}}
             
             
             onClick={()=>this.props.changeColor(this.props.index)}>

            </div>
        )
    }
}




// class CircleCreate extends Component {
//     state = {
//         circles: [],
//     };

//     addCircles = () => {
//         this.setState({
//             circles: [...this.state.circles, false],
//         });
//     };

//     changeColor = (index) => {
//         const updatedCircles = [...this.state.circles];
//         updatedCircles[index] = !updatedCircles[index];

//         this.setState({
//             circles: updatedCircles,
//         });
//     };

//     render() {
//         return (
//             <>
//                 <button onClick={this.addCircles}>Add Circles</button>
//                 <h1>Total Circles -- {this.state.circles.length} </h1>
//                 {this.state.circles.map((element, index) => (
//                     <Circle
//                         key={index}
//                         colorHighlight={element}
//                         changeColor={this.changeColor}
//                         index={index}
//                     />
//                 ))}
//             </>
//         );
//     }
// }

// export default CircleCreate;

// class Circle extends Component {
//     render() {
//         return (
//             <div
//                 style={{
//                     width: 100,
//                     display: "inline-block",
//                     height: 100,
//                     border: "2px solid black",
//                     borderRadius: "50%",
//                     backgroundColor: this.props.colorHighlight ? "lightblue" : null,
//                 }}
//                 onClick={() => this.props.changeColor(this.props.index)}
//             ></div>
//         );
//     }
// }
