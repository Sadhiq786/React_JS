import { useState } from "react";
import "./Register.css"


const RegistrationForm = ()=>{


    // creation of state
    const [email, setEmail]=useState("");
    const [username, setUsername]=useState("");
    const [phone, setPhone]=useState("");
    const [password, setPassword]=useState("");
    const [confirm_password, setConfirmPassword]=useState("");
    const [course, setCourse]=useState("");
    const [location, setLocation]=useState("");


    // errors
    const [emailError, setEmailError] = useState(null);
    const [usernameError, setUsernameError] = useState(null);
    const [phoneError, setPhoneError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [ConfirmpasswordError, setConfirmPasswordError] = useState(null);


    // email validation
    const handleEmail =(event)=>{
        let enteredEmail = event.target.value;
        setEmail(enteredEmail);
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const validEmail = emailRegex.test(enteredEmail);
        if(!validEmail)
        {
            showError();
        }
        else{
            setEmailError(null);
        }
    }
        const showError =()=>{
             setEmailError("Enter correct  email address");
         }

    // username
    const handleUsername = (event)=>{
        let enteredUsername = event.target.value;
        setUsername(enteredUsername);

        if(enteredUsername.length <=3 || !isNaN(enteredUsername))
        {
            showNameError()
        }
        else{
            setUsernameError(null)
        }
    }
    const showNameError=()=>{
        setUsernameError("Enter valid username")
    }


    // phone validation
    const handlePhone=(event)=>{
        const enteredNumber = event.target.value;
        setPhone(enteredNumber);
        if (enteredNumber.length === 0 || isNaN(enteredNumber) || enteredNumber.length!==10) 
        {
            showPhoneError();
        }
        else{
            setPhoneError(null);
        }
    }
    const showPhoneError=()=>{
        setPhoneError("Enter a valid 10-digit mobile number only")
    }


    // password validation
        const handlePassword=(event)=>{
            const enteredPassword = event.target.value;
            setPassword(enteredPassword);
        }
        const handleConfirmPassword = (event)=>{
            const enteredConfirmPassword = event.target.value;
            setConfirmPassword(enteredConfirmPassword)

            if(enteredConfirmPassword!== password)
            {
                showPasswordError();
            }
            else
            {
                setConfirmPasswordError(null);
            }
        }
    const showPasswordError=()=>{
        setConfirmPasswordError("Passwords do not match");
    }

    // location
    const handleLocation = (event)=>{
         const enteredLocation = event.target.value
         setLocation(enteredLocation)
    }

    // Submit
    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Validation checks
        if (!email || emailError || !username || usernameError || !phone || phoneError || !password || passwordError || !confirm_password || ConfirmpasswordError) {
            alert("Please fill in all the required fields correctly");
            return;
        }
    
        // Storing data in local storage
        const userdata = { email, username, password, confirm_password, phone, course, location };
        localStorage.setItem("RegisteredData", JSON.stringify(userdata));
    
        // Resetting form fields
        setEmail("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setPhone("");
        setCourse("");
        setLocation("");
    
        alert("Registration successful");
    };
    

    return(
        <>
        <div className="register-container">
        <h5>Registration Form</h5>
        <form>
            {/* email */}
            <input type="email"
             name="email" 
             value={email}
             onChange={handleEmail}
             placeholder="Email" 
             required
             style={{ border: emailError ? "1px solid red" : "1px solid green"}}
             /> <br/>
             {
                emailError
                &&
                <span style={{color:"red"}}>{emailError}</span>
            }
            <br/>

            {/* username */}
            <input type="text" 
             name="username"
             value={username} 
             onChange={handleUsername}
             placeholder="Username"
             style={{border: usernameError ? "1px solid red":"1px solid green"}}
             /> <br/>
             {
                usernameError
                &&
                <span style={{color:"red"}}>{usernameError}</span>
             }
             <br/>

            <input type="password" 
             name="password" 
             value={password} 
             placeholder="Password"
             onChange={handlePassword}
             /> <br/><br/>

            <input type="password" 
             name="confirm_password" 
             value={confirm_password} 
             placeholder="Confirm Password"
             onChange={handleConfirmPassword}
             style={{border: ConfirmpasswordError ? "1px solid red" : "1px solid green"}}
             /> <br/>
             {
                ConfirmpasswordError
                &&
                <span style={{color:"red"}}>{ConfirmpasswordError}</span>
             }
             <br/>

            <input type="text"
             name="phone" 
             value={phone}
             placeholder="Phone Number"
             onChange={handlePhone}
             style={{border: phoneError ? "1px solid red": "1px solid green"}}
             /> 
             <br/>
             {
                phoneError
                &&
                <span style={{color:"red"}}>{phoneError}</span>
             }<br/>

            <p style={{fontSize:"12px"}}>Please select one of the above course</p>
            <div  className='course-radio'>
            <input
                type="radio"
                name="course"
                value="JavaScript"
                checked={course === "JavaScript"}
                onChange={(event) => setCourse(event.target.value)}
                />
                <label>JavaScript</label><br/>

                <input
                type="radio"
                name="course"
                value="ReactJS"
                checked={course === "ReactJS"}
                onChange={(event) => setCourse(event.target.value)}
                /> 
                <label>ReactJS</label><br/>

                <input
                type="radio"
                name="course"
                value="Redux"
                checked={course === "Redux"}
                onChange={(event) => setCourse(event.target.value)}
                />
                <label>Redux</label>
            </div><br/>

            <select value={location} onChange={handleLocation} name="location" className="location">
                <option value="Hyderabad">Hyderabad</option>
                <option value="Kukatpally">Kukatpally</option>
                <option value="Nizampet">Nizampet</option>
            </select>
            <br/><br/> 

            <input type="submit" value="Register" onClick={handleSubmit}
   />
        </form>
        </div>
        </>
    )
}

export default RegistrationForm;



