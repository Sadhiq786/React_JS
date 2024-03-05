import { useNavigate } from "react-router-dom";


const InvalidScreen=()=>{
        const navigate = useNavigate()
    const handleRoute=()=>{
        navigate("/")
    }
    return(
        <div>
        <h2>404 error</h2>
        <button onClick={handleRoute}>Go to Home</button>
        </div>
    )
}
export  default InvalidScreen;