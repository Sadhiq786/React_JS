import { useContext } from "react";
import ComponentA from "../Components/context/ComponentA";
import Header from "../Components/navBar/header";
import { UserDetails } from "../Navigation/navigation";

const AboutScreen=()=>{

    let globalInfo=useContext(UserDetails)
    console.log(globalInfo)

    const changeName = ()=>{
        globalInfo.changeName()
    }

    return(
        <>
        <Header/>
        <h2>About Screen</h2>
        <h3>I am from navigation.js, global info {globalInfo.username}</h3>
        <button onClick={changeName}>Change Name</button>
        <ComponentA/>
        </>
    )
}
export  default AboutScreen;