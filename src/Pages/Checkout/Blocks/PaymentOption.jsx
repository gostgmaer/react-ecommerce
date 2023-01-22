import React from 'react'

const PaymentOption = () => {
  const handleSubmit=()=>{
    console.log("data");
}
  return (
    <div className='PaymentOption'>
       <button  onClick={handleSubmit} className=" btn submitPayment">Payment</button>
    </div>
  )
}

export default PaymentOption