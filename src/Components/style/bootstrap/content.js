import TableImage from "../../images/img";

const Content = ()=>{

    return(
        <>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
      <Cards/>
      </div>
      <div className="col-sm-4">
      <Cards/>                
      </div>
      <div className="col-sm-4">
      <Cards/> 
      </div>
    </div>
  </div>
</>

    )
}
export default Content;

export const Cards = ()=>{

    return(
            <div className="card" style={{ width: "100%" }}>
                <TableImage/>
            <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Some example text.</p>
                <a href="#" className="btn btn-primary">
                See Profile
                </a>
            </div>
            </div>
    )
}

