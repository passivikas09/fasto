import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useState } from 'react';
import ReactiveButton from 'reactive-button';
export default function AdminHeader() {
  const nav = useNavigate()
  const [state, setState] = useState('idle')

  const onClickHandler = () => {
    setState('loading')
    sessionStorage.clear()
   
    setTimeout(() => {
      setState('success')
      nav("/signin")
      toast.error("Log out successfully!")
    }, 3000)
  }
 
 
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/admin" className="navbar-brand fs-1 mx-2 ">Admin Panel</Link>
          <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-2 me-auto mb-2 mb-lg-0 fs-5">
              <li className="nav-item">
                <Link className="nav-link active mx-2" aria-current="page" to="/admin">Dashboard </Link>
              </li>
              <div className="dropdown mx-2">
                <li
                  className="nav-item dropdown-toggle pt-2"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Training
                </li>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item" to="/admin/certificate">Total</Link></li>
                  <li><Link className="dropdown-item" to="/admin/certificate/all">Training All</Link></li>
                </ul>
              </div>
              <div className="dropdown mx-2">
                <li
                  className="nav-item dropdown-toggle pt-2"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                   sector
                </li>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item mx-2" to="/admin/category">All sector</Link></li>
                  <li><Link className="dropdown-item mx-2" to="/admin/category/add">Add sector</Link></li>
                </ul>
              </div>
              <div className="dropdown mx-2">
                <li
                  className="nav-item dropdown-toggle pt-2"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                   Upload
                </li>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item mx-2" to="/admin/image/all">All Images</Link></li>
                  <li><Link className="dropdown-item mx-2" to="/admin/Image/add">Add Image</Link></li>
                </ul>
              </div>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/admin/adminenquiry" >Enquiry</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link mx-2" to="/admin/alluser">All User</Link>
              </li>
            </ul>
            <form className="d-flex justify-content-end" role="search">
            <ReactiveButton  shadow  size="large"  buttonState={state} idleText="logout" color="secondary" loadingText="Loading" successText="Success"  onClick={onClickHandler}/>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}