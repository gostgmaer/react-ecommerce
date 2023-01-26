import React from 'react'
import { MdLock, MdPerson } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './forgetpassword.scss'

const ForgetPassword = () => {
    
      const forgetPassHandler=()=>{

      }


  return (
    <div>
         <div className="ForgetPassword">
      <div className="forgetPass-wrapper">
        <h1>Reset Password</h1>
        <div className="forgetPass-form">
          <div className="username-input">
            <MdPerson></MdPerson>
            <input type="text" placeholder="Username or Email " />
          </div>

         
        
        </div>
        <div className="forgetPass-form-btn">
     
          <button className="forgetPass-btn btn" onClick={forgetPassHandler}>Reset Password</button>
        </div>
        
        <div className="alternative-signup">
          <p>
            Remember Password? <Link to={"/signin"}>login</Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ForgetPassword