import React, { useState } from "react";
import { MdLock, MdMail, MdPerson, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Registration.scss";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [confirmEmail, setConfirmEmail] = useState('');
  const [notmatch, setNotmatch] = useState('');




  const signupBtn = () => {
    if (email===confirmEmail && pass!==''&&name!=='' && email!=='') {
      const obj = {
        name: name,
        email: confirmEmail,
        phone: phone,
        pass: pass,
      };

      setNotmatch('')
        name===''||email===''||phone===''||pass===''?console.log('Please Fill the Form'):console.log(obj);
    } else if(pass==='') {
      setNotmatch('Password Should Not be Blank')
    }else if(name==='') {
      setNotmatch('Username Should Not be Blank')
    }else if(email==='') {
      setNotmatch('Email Address Should Not be Blank')
    }else{
      setNotmatch('Email Address Does not Match')
    }
   
  };

  return (
    <div className="Registration">
      <div className="signup-wrapper">
        <h1>Sign Up</h1>
        <span>{notmatch}</span>
        <div className="signup-form">
          <div className="username-input">
            <MdPerson></MdPerson>
            <input type="text" required onChange={(e)=>setName(e.target.value)} placeholder=" username *" />
          </div>
          <div className="email-input">
            <MdMail></MdMail>
            <input type="email" value={email}  required onChange={(e)=>setEmail(e.target.value)} placeholder="your email *" />
          </div>
          <div className="email-input">
            <MdMail></MdMail>
            <input type="email" required  onChange={(e)=>setConfirmEmail(e.target.value)} placeholder="Confirm Email *" />
          </div>

          <div className="password-input">
            <MdLock></MdLock>
            <input type="password" required  onChange={(e)=>setPass(e.target.value)} placeholder=" password *" />
          </div>
        </div>
        <div className="signup-form-btn">
          <button className="signup-btn btn" onClick={signupBtn}>Sign up</button>
        </div>

        <div className="alternative-signup">
          <p>
            have a account? <Link to={"/signin"}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
