import { Route, Routes } from "react-router-dom";
import HomeScreen from "../../Pages/homeScreen";
import SettingScreen from "../../Pages/setting-screen";
import AboutScreen from "../../Pages/aboutScreen";
import ProfileScreen from "../../Pages/profileScreen";
import InvalidScreen from "../../Pages/invalid-screen";
import ProductDetail from "../../Pages/product-detail-screen";




const PostRoute=()=>{

    return(
        <>
        <Routes>
            <Route path="/" Component={HomeScreen}/>
            <Route path="/setting" Component={SettingScreen} />
            <Route path="/about" Component={AboutScreen} />
            <Route path="/profile" Component={ProfileScreen} />
            <Route path="*" Component={InvalidScreen}/>
        
            <Route path="/:category/:id" Component={ProductDetail} />
        </Routes>
        </>
    )
}
export default PostRoute;