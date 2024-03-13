import { useContext } from "react";
import ComponentA from "../Components/context/ComponentA";
import Header from "../Components/navBar/header";
import { UserDetails } from "../Navigation/navigation";
import useAxios from "../Components/Hooks/customHooks/useAxios";
import { Spinner } from "react-bootstrap";
import { BASE_PROD_URL, endPoints } from "../endpoints/endPoint";

const AboutScreen=()=>{

    let globalInfo=useContext(UserDetails)

    const [data] = useAxios(`${BASE_PROD_URL}${endPoints.categories}`)

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
        {
            data.length>0
            ?
            data.map((item)=>{
                return(
                    <h2>{item}</h2>
                )
            })
            :
            <Spinner/>
        }

        </>
    )
}
export  default AboutScreen;