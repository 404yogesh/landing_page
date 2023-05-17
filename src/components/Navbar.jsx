import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid  text-center">
    <a className="navbar-brand ms-4" href="#"> <img src="./Asset19CallMaxiCab.png" alt="maxi taxi in perth" style={{"width": "50%"}}></img></a>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className=" collapse navbar-collapse " id="navbarText">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item me-5">
          <a className=" " aria-current="page" href="#">Get Quote</a>
        </li>
        <li className="nav-item me-5">
          <a className="" href="#">About</a>
        </li>
        <li className="nav-item me-5">
          <a className="" href="#">Services</a>
        </li>
        <li className="nav-item me-5">
          <a className="" href="#">Blog</a>
        </li>
        <li className="nav-item me-5">
          <a className="" href="#">Contact</a>
        </li>
        <li className="nav-item me-5">
          <a className="" href="#">COVID-19</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
