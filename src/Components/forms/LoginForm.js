import { useState } from "react";

const LoginForm = ()=>{

    const [loginemail, setGamil]=useState("")
    const [loginpassword, setPassword]=useState("");

    const [loginError, setloginError] = useState(null);


    const handleLogin=(event)=>{
        event.preventDefault();

        const storedData = JSON.parse(localStorage.getItem("RegisteredData"));

        if(storedData && storedData.email === loginemail && storedData.password===loginpassword)
        {
            setloginError(null);
            alert("Login Successfull");
        }
        else
        {
            setloginError("Invalid email or password");
        }

    }

    return(
        <>
        <h5>Login</h5>

        <form>
            <input type="text" name="loginemail" placeholder="Enter Email" value={loginemail} onChange={(e)=>setGamil(e.target.value)}/><br/><br/>
            <input type="password" name="loginpassword" placeholder="Enter Password" value={loginpassword} onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
            {
                loginError && <span style={{color:"red"}}>{loginError}</span>
            }
            <input type="submit" value="Login" onClick={handleLogin}/>
        </form>
        </>
    )

}
export default LoginForm;