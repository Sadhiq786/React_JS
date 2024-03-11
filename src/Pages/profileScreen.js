import ProfileExample from "../Components/Hooks/useCallback/profile";
import UseMemoExample from "../Components/Hooks/useMemo/useMemo";
import UseReducer from "../Components/Hooks/useReducer/useReducerExample";
import Header from "../Components/navBar/header";


const ProfileScreen=()=>{
    return(
        <>
        <Header/>
        <h2>Profile Screen</h2>
        {/* <UseReducer/> */}
        {/* <UseMemoExample/> */}
        <ProfileExample/>
        </>
    )
}
export  default ProfileScreen;