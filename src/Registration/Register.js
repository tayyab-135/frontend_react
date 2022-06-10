import React from 'react'
import { Link } from 'react-router-dom'
export default function Register() {

    return (
        <>
        <div className="container my-5">
         <center><img src="reg1.png" id="animated-img1" width="24%" alt="..."/></center>
      
        <div className="container">
            <center><h4><i>Register Yourself Here</i></h4></center></div>
            <hr/>
            <div className="container d-flex">
            <form className="needs-validation row g-3" novalidate>
            <div className="col-md-5">
  <label for="formFile" className="form-label"><strong>Upload Image</strong></label>
  <input className="form-control" type="file" name="image" id="formFile"/>
</div>
<div className="col-md-5">
    <label for="inputState" className="form-label"><strong>Register As</strong></label>
    <select id="inputState" className="form-select" required>
      <option>Teacher</option>
      <option>Student</option>
    </select>
  </div>
  <div className="col-md-5">
    <label for="inputName" className="form-label"><strong>Name</strong></label>
    <input type="text" className="form-control" placeholder="Enter Name" name="name" id="inputName" required/>
  </div>
  <br/>
  <div className="col-md-5">
    <label for="inputPhone" className="form-label"><strong>Phone</strong></label>
    <input type="text" className="form-control" placeholder="Enter Number" name="phone" id="inputNumber" required/>
  </div>
  
  <div className="col-md-5">
    <label for="inputEmail" className="form-label"><strong>Email</strong></label>
    <input type="email" className="form-control" placeholder="Enter Email" name="email" id="inputEmail" required/>
  </div>
  <div className="col-md-5">
    <label for="inputState" className="form-label"><strong>Living Area</strong></label>
    <select id="inputState" className="form-select" required>
      <option selected>Choose...</option>
      <option>Johar Town</option>
      <option>DHA</option>
      <option>Cavlary Ground</option>
      <option>Lower Mall</option>
      <option>Upper Mall</option>
      <option>Gulshan Ravi</option>
      <option>Allama Iqbal Town</option>
      <option>Askari</option>
      <option>Sabzazar</option>
      <option>Wapda Town</option>
    </select>
  </div>
  <div className="col-md-5">
    <label for="inputState" className="form-label"><strong>Qualification</strong></label>
    <select id="inputState" className="form-select" required>
      <option selected>Choose...</option>
      <option>1 to 8</option>
      <option>Matric/O Levels</option>
      <option>Intermediate/A Levels</option>
      <option>BBA/MBA</option>
      <option>B.A/B.Com</option>
      <option>BS Engineering</option>
      <option>Mphill</option>
      <option>PhD</option>
    </select>
  </div>

  <div className="col-md-5">
    <label for="inputState" className="form-label"><strong>Experience</strong></label>
    <select id="inputState" className="form-select" required>
      <option selected>Choose...</option>
      <option>Fresh</option>
      <option>Less than 5 years</option>
      <option>5 to 10 Years</option>
      <option>10 years Above</option>
    </select>
  </div>
  <div className="col-md-5">
    <label for="inputCity" className="form-label"><strong>Password</strong></label>
    <input type="password" className="form-control" id="inputCity" required/>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-info">Register</button>
    <spam className="mx-4"><Link className="link-info" to="/login">Already Registered</Link></spam>
  </div>
</form>
</div>
    </div> 
    
        </>
    )
}
