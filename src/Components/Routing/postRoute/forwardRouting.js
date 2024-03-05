import { Route, Routes } from "react-router-dom";
import Loginform from "../Pages/Login";
import ProfileDisplay from "../Pages/Profile";
import Content from "../Pages/Content";
import HomeDisplay from "../Pages/HomeDisplay";

const ForwardRoute = ()=>{
    return(
        <Routes>
            <Route path="/" Component={HomeDisplay}/>
            <Route path="/profile" Component={ProfileDisplay}/>
            <Route path="/content" Component={Content}/>
            <Route path="/login" Component={Loginform}/>
        </Routes>
    )
}
export default ForwardRoute;