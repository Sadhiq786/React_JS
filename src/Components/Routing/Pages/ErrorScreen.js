import { useNavigate } from "react-router-dom";


const ErrorScreen = ()=>{

    const Redirect=useNavigate();

    const handleError=()=>{
        Redirect("/")
    }

    return(
        <>
        <h1>Error</h1>
        <button onClick={handleError}>Go to Home</button>
        </>
    )
}
export default ErrorScreen;