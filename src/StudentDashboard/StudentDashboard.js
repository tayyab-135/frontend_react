import React from 'react'
import { Link } from 'react-router-dom'
export default function StudentDashboard() {

    return (
        <>
       
<div className="container my-3">
    <div className="container-fluid">
    <div className="btn-group">
  <button type="button" className="btn btn-danger">Action</button>
  <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/">Action</Link></li>
    <li><Link className="dropdown-item" to="/">Another action</Link></li>
    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
    <li><hr className="dropdown-divider"/></li>
    <li><Link className="dropdown-item" to="/">Separated link</Link></li>
  </ul>
</div>
    </div>
</div>
       
        </>
    )

}
