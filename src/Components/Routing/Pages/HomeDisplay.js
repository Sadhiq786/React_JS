import Navbar from "./Navbar";
import { Carousel } from "react-bootstrap";

const HomeDisplay=()=>{
    return(
        <>
        <Navbar/>
        <Carousel>
        <Carousel.Item>
            {/* <ExampleCarouselImage text="First slide" /> */}
            <img src={"https://images.unsplash.com/photo-1676463390692-7e7d0567f056?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={1600} height={650}/>
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            <img src={"https://images.unsplash.com/photo-1682837117095-f58f7c6462e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={1600} height={650}/>
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <img src={"https://images.unsplash.com/photo-1679798237665-7128fd860ea5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={1600} height={650}/>
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
         </Carousel>

        </>
    )
}
export  default HomeDisplay;