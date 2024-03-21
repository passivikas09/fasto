
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
export default function Headers() {
  const token=sessionStorage.getItem("token")
  
  const logoutFunc=()=>{
    toast.error("Logout Successfully")
    sessionStorage.clear()  
  }
 
   return (
      <>
         <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" to="#">   <img classNameName="img-fluid" style={{height:"100px"}} src="/images/logo1.jpg"/></a>
    <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mx-2 me-auto mb-2 mb-lg-0 fs-5">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/service">Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/training">Training</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/event">Event</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact" >Contact</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/fhra">FHRA</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        
        {!token?<Link to="/signin" className="btn btn-outline-success rounded-pill mx-2" type="submit">Log in</Link>:
      <Link to="/signin" onClick={logoutFunc} className="btn btn-outline-danger rounded-pill mx-2" type="submit">Log out</Link> }
        {!token?<Link to="/register" className="btn btn-primary rounded-pill" type="submit">Register</Link>:""}   
        </form>
    </div>
  </div>
</nav>
      </>
   )
}