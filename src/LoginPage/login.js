import React, { useState } from 'react'

export default function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const onLogin=()=>{

  }
    return (
        
        <>

<div className="container my-3">
         <div><center><img my-5 src="login.png" className="animated bounce infinite my-4" id="animated-img1" width="50%" alt="..."/></center></div>
        
        </div>
        <div className="container">
            <center><h1><i>Welcome, Login Here</i></h1></center>
            <hr/><br/><br/>
            <form className="needs-validation row g-3" novalidate>
  
  <div className="col-md-8">
    <label for="inputEmail"  className="form-label"><strong>Email</strong></label>
    <input id="email" type="email"  className="form-control" placeholder="Enter Email" name="email" id="inputEmail" required/>
  </div>
  
  <div className="col-md-8">
    <label for="inputCity" className="form-label"><strong>Password</strong></label>
    <input type="password" className="form-control" id="inputCity" required/>
  </div>
  <div className="col-12 my-4">
    <button type="submit" className="btn btn-info">Login</button>
  </div>
  
</form>


    </div> 
  

        </>
    )
}
