import axios from "axios";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { LOGIN_API } from "../constants/network";
import { Link } from 'react-router-dom'
import { validateEmail } from "../utils/validators";

export default function Login() {
  const alert = useAlert();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async(e) => {
    e.preventDefault();

    if (!email || !password)
      return alert.error("email and password cannot be emty");
    if (!validateEmail(email)) {
      alert.error("invalid email!");
    }
    if (password.length < 8) {
     return alert.error("password must be greator than 8 characters");
    }

    await axios.post('http://127.0.0.1:8000/LoginUser',
      
      {
        email:email,
        password:password
      }).then((res)=>{
        console.log("dd",res)
      })
    .catch((err)=>console.log("err",err))

  };

  return (
    <>

        <div class="b-example-divider"></div>
        
        <div class="container col-xxl-8 px-4 py-5 my-4 ">
        <center>
          <h4>
            <i>Welcome, Login Here</i>
          </h4>
        </center>
        <hr/>
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6 my-5">
              <img src="login.png" class=" animated bounce infinite d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" height="300" loading="lazy" />
            </div>
            <div class="col-lg-6">
            <form className="needs-validation row g-3 my-2" novalidate>
          <div className="col-md-12 ">
            <label for="inputEmail" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              id="email"
              onChange={(evt) => setEmail(evt.target.value)}
              value={email}
              type="email"
              className="form-control"
              placeholder="Enter Email"
              name="email"
            />
          </div>

          <div className="col-md-12">
            <label for="inputCity" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              value={password}
              type="password"
              placeholder="Enter Password"
              className="form-control"
              onChange={(evt) => setPassword(evt.target.value)}
              id="inputCity"
              required
            />
          </div>
        </form>
              
                <div className="col-md-12 my-3">
    <button onClick={(e) => onLogin(e)} type="button" className="btn btn-info">Login</button>
  </div>
              </div>
            </div>
          </div>
    </>
  );
}
