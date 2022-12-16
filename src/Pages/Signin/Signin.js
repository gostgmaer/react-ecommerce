import React from "react";
import "./Signin.scss";
import { MdLock, MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="Signin">
      <div className="login-wrapper">
        <h1>Login</h1>
        <div className="login-form">
          <div className="username-input">
            <MdPerson></MdPerson>
            <input type="text" placeholder="Type your username" />
          </div>

          <div className="password-input">
            <MdLock></MdLock>
            <input type="text" placeholder="Type your password" />
          </div>
          <p className="fpass">Forgot password?</p>
        </div>
        <div className="login-form-btn">
     
          <button className="login-btn btn">LOGIN</button>
        </div>
        <div className="login-alter-btn">
     
          <button className="login-btn btn">G</button>
          <button className="login-btn btn">F</button>
        </div>
        <div className="alternative-signup">
          <p>
            Not a member? <Link to={"/signup"}>Sign-up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
