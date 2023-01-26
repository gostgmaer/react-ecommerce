import React from "react";
import "./Signin.scss";
import { MdLock, MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Signin = () => {


  function loginHandler() {
    throw new Error("Function not implemented.");
  }

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
          <Link to={'/forget-password'} className="fpass">Forgot password?</Link>
        </div>
        <div className="login-form-btn">
     
          <button className="login-btn btn" onClick={loginHandler}>LOGIN</button>
        </div>
        <div className="login-alter-btn">
     
          <FaGoogle className="google"></FaGoogle>
          <FaFacebook className="facebook"></FaFacebook>
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
