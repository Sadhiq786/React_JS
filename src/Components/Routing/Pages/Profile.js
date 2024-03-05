import Navbar from "./Navbar";


const ProfileDisplay = ()=>{

    return (
        <>
        <Navbar/>
        <div className="card" style={{ width: 400, margin: "auto", textAlign:"center"}}>
        <img className="card-img-top" src={"https://images.unsplash.com/photo-1503104834685-7205e8607eb9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} style={{width:"200px", height:"200px", borderRadius:"200px", display:"block", margin:"auto"}} alt="Card image" />
        <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Some example text.</p>
            <a href="#" className="btn btn-primary">
            See Profile
            </a>
        </div>
        </div>
        </>
    )
}
export default ProfileDisplay;