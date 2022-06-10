import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar ()  {
    return (
        <>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
       <Link className="navbar-brand mx-4" to="/">
    <img src="logo.png" width="30" height="30" class="d-inline-block align-top" alt="#"/>
    TutorsChain
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span class="sr-only"></span></Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link disabled" to="/">Find Tutor</Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link" to="/Contact">Contact Us</Link>
      </li>

      <li className="nav-item">
       <Link className="nav-link" to="Registration">Register</Link>

      </li>
      <li className="nav-item float-right">
      <Link className="nav-link" to="login">Login</Link>
      </li>
    </ul>
    
  </div>
</nav>

        </>
    )
}
