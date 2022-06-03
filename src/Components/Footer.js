import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <>
        <div className="container">
        <div className="b-example-divider"></div>

<div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <img src="logo.png" className="bi" width="40" height="34"/>
      </Link>
      <span className="text-muted" color="white">&copy; 2022 TutorsChain.org</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><Link className="text-muted" to="/"><img src="facebook.png" className="bi" width="40" height="34"/></Link></li>
      <li className="ms-3"><Link className="text-muted" to="/"><img src="linkedin.png" className="bi" width="40" height="34"/></Link></li>
      <li className="ms-3"><Link className="text-muted" to="/"><img src="twitter.png" className="bi" width="40" height="34"/></Link></li>
    </ul>
  </footer>
</div>

  </div>
        
        </>
    )
}
