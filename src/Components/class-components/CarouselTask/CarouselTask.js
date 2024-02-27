import { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import TableImage from "../../images/img";

class CarouselTask extends Component{
    constructor()
    {
        super()
    }
        render()
        {
            return(
                <div>
                    <Carousel>
                       <img src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"}></img>
                    </Carousel>
                </div>
            )
        }
    }

export default CarouselTask;