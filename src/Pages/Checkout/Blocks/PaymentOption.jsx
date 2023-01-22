import React from "react";
import { useCheckoutContext } from "../CheckContext";

const PaymentOption = () => {
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
    email,
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
    console.log(obj);
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
