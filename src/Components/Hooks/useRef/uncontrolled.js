import { useRef } from "react";


const Uncontrolled = ()=>{

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit=(event)=>{
        event.preventDefault();
        // console.log("username", usernameRef.current.value)
        // console.log("password", passwordRef.current.value)

        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        if(username.length > 5 || username.length ==0)
        {
            alert("enter less than 5 characters")
        }
        else{
            alert("Successfull")
        }

    }

    return(
        <>
        <h1>Uncontrolled component example</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" ref={usernameRef}  placeholder="username"/><br></br>
            <input type="password" name="password" ref={passwordRef} placeholder="password"/>
            <input type="submit" />
        </form>
        </>
    )
}
export default Uncontrolled;