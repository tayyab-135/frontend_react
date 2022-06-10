import React from "react"
import { Link } from 'react-router-dom'
import './card-style.css';

export default function Card(props)  {

    return (
        <>

<div className="card text-center">
<div className="overflow">

<img src='teacher.jpg' alt=''className="card-img-top"/>

</div>
<div className='card-body text-dark'>
<h5 class="card-title">Usama Shahid</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><strong>Phone:</strong> 03099115958</li>
    <li class="list-group-item"><strong>Email: </strong>usama@gmail.com</li>
    <li class="list-group-item"><strong>Education:</strong> BS Computer Science</li>
    <li class="list-group-item"><strong>Experience:</strong> Fresh</li>
    <li class="list-group-item"><strong>Location:</strong> Sabzazar</li>
  </ul>
<Link to="/" className="btn btn-info">Send Request</Link>
</div>
       
        
        </>
    )

}