import axios from "axios";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { validateEmail } from "../utils/validators";

export default function Login() {
  const alert = useAlert();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();

    if (!email || !password)
      return alert.error("email and password cannot be emty");
    if (!validateEmail(email)) {
      alert.error("invalid email!");
    }
    if (password.length < 8) {
      alert.error("password must be greator than 8 characters");
    }
  };
  return (
    <>
      <div className="container my-3">
        <div>
          <center>
            <img
              my-5
              src="login.png"
              className="animated bounce infinite my-4"
              id="animated-img1"
              width="50%"
              alt="..."
            />
          </center>
        </div>
      </div>
      <div className="container">
        <center>
          <h1>
            <i>Welcome, Login Here</i>
          </h1>
        </center>
        <hr />
        <br />
        <br />
        <form className="needs-validation row g-3" novalidate>
          <div className="col-md-8">
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

          <div className="col-md-8">
            <label for="inputCity" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              value={password}
              type="password"
              className="form-control"
              onChange={(evt) => setPassword(evt.target.value)}
              id="inputCity"
              required
            />
          </div>
          <div className="col-12 my-4">
            <button
              onClick={(e) => onLogin(e)}
              // type="submit"
              className="btn btn-info"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
