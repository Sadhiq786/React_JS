import { BrowserRouter } from "react-router-dom";
import PostRoute from "./postRoutes/postRoute";
import PreRoute from "./preRoutes/preRoute";


const NavigationStack = ()=>{
    
    return(
        <BrowserRouter>
            {
                true
                ?
                <PostRoute/>
                :
                <PreRoute/>
            }
        </BrowserRouter>
    )
}
export  default NavigationStack;