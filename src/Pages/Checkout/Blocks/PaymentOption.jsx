import React, { useState } from "react";
import { useSelector } from "react-redux";
import ConfirmpaymentModal from "../../../Components/PaymentConfirm/ConfirmpaymentModal";
import { useGlobalContext } from "../../../States/GlobalContext/Context";
import { useCheckoutContext } from "../CheckContext";

const PaymentOption = () => {
 
  const {isCOnfirm, setIsCOnfirm} =useGlobalContext()
 

  const products = useSelector((state) => state["cart"].products);
  const {
    fname,
    setFname,
    lname,
    setLname,
    Company,
    setCompany,
    country,
    setCountry,
    streetAdd,
    setStreetAdd,
    suit,
    setSuit,
    city,
    setCity,
    distric,
    setDistric,
    email,TaxCalculate,TotalSum,
    setEmail,
    phone,
    setPhone,
    pin,
    setPin,
  } = useCheckoutContext();

  const handleSubmit = () => {
    const obj = {
      firstName: fname,
      lname: lname,
      email: email,
      pin: pin,
      phone: phone,
      company: Company,
      suit: suit,
      city: city,
      distric: distric,
      country: country,
      street: streetAdd,
    };
    const object ={
      products:products,address:obj
    }
    console.log(object);
    setIsCOnfirm(true)
  };
  return (
    <div className="PaymentOption">
      <button onClick={handleSubmit} className=" btn submitPayment">
        Payment
      </button>
      

    </div>
  );
};

export default PaymentOption;
