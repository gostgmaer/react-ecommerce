import React, { useState } from 'react'
import { MdMarkEmailRead } from 'react-icons/md'
import './newsletter.scss'

const NewsLetter = () => {
    const [mail, setMail] = useState('');
    const [error, setError] = useState('Email address Should not be Blank');

    const subscribehandler= ()=>{
        if (mail==='') {
           
            alert(error)
        }else{
            console.log(mail);
        }
    }

  return (
    <div className='NewsLetter'>
        <div className="wrapper">
        <MdMarkEmailRead></MdMarkEmailRead>
        <h3>Subscribe to our NewsLetter</h3>
        <p>recive a $20 coupon on your first Order</p>
        <div className="formGroup">
            <input type="text" className='form-control' onChange={e=>setMail(e.target.value)} placeholder='Enter Email Address' />
            <button className='btn' onClick={subscribehandler}>Subscribe</button>
        </div>

        </div>
    </div>
  )
}

export default NewsLetter