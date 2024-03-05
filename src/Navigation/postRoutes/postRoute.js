import { Route, Routes } from "react-router-dom";
import HomeScreen from "../../Pages/homeScreen";
import SettingScreen from "../../Pages/setting-screen";
import AboutScreen from "../../Pages/aboutScreen";
import ProfileScreen from "../../Pages/profileScreen";




const PostRoute=()=>{

    return(
        <>
        <Routes>
            <Route path="/" Component={HomeScreen}/>
            <Route path="/setting" Component={SettingScreen} />
            <Route path="/about" Component={AboutScreen} />
            <Route path="/profile" Component={ProfileScreen} />
        </Routes>
        </>
    )
}
export default PostRoute;