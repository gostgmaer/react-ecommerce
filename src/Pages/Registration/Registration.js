import React, { useState } from "react";
import { MdLock, MdMail, MdPerson, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Registration.scss";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");




  const signupBtn = () => {
    const obj = {
      name: name,
      email: email,
      phone: phone,
      pass: pass,
    };
      name===''||email===''||phone===''||pass===''?console.log('Please Fill the Form'):console.log(obj);
  };

  return (
    <div className="Registration">
      <div className="signup-wrapper">
        <h1>Sign Up</h1>
        <div className="signup-form">
          <div className="username-input">
            <MdPerson></MdPerson>
            <input type="text" required onChange={(e)=>setName(e.target.value)} placeholder="Type your username" />
          </div>
          <div className="email-input">
            <MdMail></MdMail>
            <input type="email" value={email}  required onChange={(e)=>setEmail(e.target.value)} placeholder="Type your email" />
          </div>
          <div className="phone-input">
            <MdPhone></MdPhone>
            <input type="text" required  onChange={(e)=>setPhone(e.target.value)} placeholder="Type your Phone Number.." />
          </div>

          <div className="password-input">
            <MdLock></MdLock>
            <input type="text" required  onChange={(e)=>setPass(e.target.value)} placeholder="Type your password" />
          </div>
        </div>
        <div className="signup-form-btn">
          <button className="signup-btn btn" onClick={signupBtn}>Sign up</button>
        </div>

        <div className="alternative-signup">
          <p>
            have a account? <Link to={"/signin"}>Sign-in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
