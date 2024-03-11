import { useContext } from "react";
import Header from "../Components/navBar/header";
import { UserDetails } from "../Navigation/navigation";
import ParentMemo from "../Components/memo/parent";


const SettingScreen=()=>{
    const UserInfo = useContext(UserDetails)
    return(
        <>
        <Header/>
        <h2>Setting Screen</h2>
        <h5>Settings Screen {UserInfo.username}</h5>
        <ParentMemo/>
        </>
    )
}
export  default SettingScreen;