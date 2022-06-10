import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import Card from './Cards'
import './card-style.css';
export default function StudentDashboard() {
    return (
        
        <>
<div className="container my-3">
         <div className='my-4'><center><img my-5 src="stu.png" className="animated bounce infinite my-4" id="animated-img1" width="30%" alt="..."/></center></div>
        
         <div className="row">
<center>
<div className="col-3 col-md-6"><input type="text" className="form-control" placeholder="Search Teacher by Location/Qualification" name="name" id="inputName" required/></div>

<div className="col-3 col-md-4 my-2"><button type="submit" className="btn btn-info">Seacrch</button></div>
</center></div><hr/>
    
        </div>

       <div className='container-fluid d-flex justify-content-center my-5'>
       <div className='row'>
           <div className='col-md-4'><Card/></div>
           <div className='col-md-4'><Card/></div>
           <div className='col-md-4'><Card/></div>
           
       </div>
       </div>

  
        </>
    )
}
