import React from "react"
import { Link } from 'react-router-dom'
import './card-style.css';

export default function Card()  {

    return (
        <>

<div className="card text-center">
<div className="overflow">

<img src='teach.png' alt=''className="card-img-top"/>

</div>
<div className='card-body text-dark'>
<h4 className="card-title">Card Title</h4>
<p className="card-text text-secondary">lorem20ksk</p>
<Link to="/" className="btn btn-outline-success">Go Anywehre</Link>
</div>
</div>       
        
        </>
    )

}