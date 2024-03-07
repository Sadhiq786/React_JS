import { BrowserRouter } from "react-router-dom";
import PostRoute from "./postRoutes/postRoute";
import PreRoute from "./preRoutes/preRoute";
import { createContext, useState } from "react";


export const UserDetails = createContext()

const NavigationStack = ()=>{
    const[username, setUsername]=useState("Sadhiq")
    
    const changeName = ()=>{
        setUsername("Sameer")
    }

    return(
        <BrowserRouter>

            <UserDetails.Provider value={{
                // username : username
                username,
                changeName 
            }}>
            {
                true
                ?
                <PostRoute/>
                :
                <PreRoute/>
            }
             </UserDetails.Provider>
        </BrowserRouter>
    )
}
export  default NavigationStack;