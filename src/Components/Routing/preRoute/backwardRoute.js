import { Route, Routes } from "react-router-dom";
import HomeDisplay from "../Pages/HomeDisplay";
import ErrorScreen from "../Pages/ErrorScreen";

const BackwardRoute=()=>{
    return(
        <>
        <Routes>
            <Route path="/" Component={HomeDisplay}></Route>
            <Route path="*" Component={ErrorScreen}></Route>
        </Routes>
        </>
    )
}
export default BackwardRoute;