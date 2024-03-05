import { BrowserRouter } from "react-router-dom";
import ForwardRoute from "./postRoute/forwardRouting";
import BackwardRoute from "./preRoute/backwardRoute";


const RedirectTask = ()=>{
    return(

        <BrowserRouter>
        {
            true
            ?
            <ForwardRoute/>
            :
            <BackwardRoute/>
        }
        </BrowserRouter>
    
    )
}
export default  RedirectTask;