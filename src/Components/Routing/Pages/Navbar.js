import { Link } from "react-router-dom";


const Navbar=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
         <li className="nav-item">
            <Link to={"/"}>Home</Link>
            </li>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
            >
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link to={"/profile"}>Profile</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/Content"}>Content</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/Login"}>Login</Link>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="text" placeholder="Search" />
                <button className="btn btn-primary" type="button">
                Search
                </button>
            </form>
            </div>
        </div>
        </nav>
        </>
    )
}
export default Navbar;