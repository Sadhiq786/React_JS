import { Link } from "react-router-dom";


const Header = ()=>{
    return(
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">  <div className="container-fluid">
    <ul className="navbar-nav">

      <li className="nav-item">
        <Link style={{textDecoration:"none", margin:"25px", color:"white"}} to={"/"}>Home</Link>
      </li>

      <li className="nav-item">
      <Link style={{textDecoration:"none", margin:"25px", color:"white"}} to={"/profile"}>Profile</Link>
      </li>
      
      <li className="nav-item">
      <Link style={{textDecoration:"none", margin:"25px", color:"white"}} to={"/about"}>About</Link>
      </li>

      <li className="nav-item">
      <Link style={{textDecoration:"none", margin:"25px", color:"white"}} to={"/setting"} >Setting</Link>
      </li>
    </ul>
  </div>
</nav>

    )
}
export default  Header;