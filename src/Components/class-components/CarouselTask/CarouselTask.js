import { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

class CarouselTask extends Component{
    state = {
        carousel:[]
    }

    addSlides=()=>{
        const slides={
            id: this.state.carousel.length + 1,
            text : `carousel ${this.state.carousel.length + 1}`,
            imageUrl:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        }

        this.setState((prevState)=>({
            carousel:[...prevState.carousel,slides],
        }))}

        render()
        {
            return(
                <>
                    <button onClick={this.addSlides}>Add Slides</button>
                    <Carousel>
                        {
                            this.state.carousel.map(slide=>(
                                <Carousel.Item key = {slide.id}>
                                    <img src={slide.imageUrl} style={{width:"100%"}}></img>
                                    <Carousel.Caption>
                                        <h2>{slide.text}</h2>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </>
            )
        }
    }

export default CarouselTask;