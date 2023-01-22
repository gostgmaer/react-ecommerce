import React, { Fragment, useState } from "react";
import { CountryList } from "../../../Assets/StaticData/CountryList";
import { useCheckoutContext } from "../CheckContext";

const BillingAddress = () => {
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

  return (
    <Fragment>
      <div className="panel-body addressBilling">
        <div className="row">
          <div className="aa-checkout-single-bill">
            <input
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder="First Name*"
            />
          </div>

          <div className="aa-checkout-single-bill">
            <input
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              placeholder="Last Name*"
            />
          </div>
          <div className="aa-checkout-single-bill">
            <input
              type="text"
              value={Company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company name"
            />
          </div>

          <div className="aa-checkout-single-bill">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}>
              <option value={0}>Select Your Country</option>
              {CountryList.data.map((item) => (
                <option key={item.CountryCode} value={item.CountryCode}>
                  {item.CountryName}
                </option>
              ))}
            </select>
          </div>
          <div className="aa-checkout-single-bill">
            <textarea
              cols={8}
              value={streetAdd}
              onChange={(e) => setStreetAdd(e.target.value)}
              placeholder={`House number and street name*`}
              rows={3}></textarea>
          </div>
          <div className="aa-checkout-single-bill">
            <input
              type="text"
              value={suit}
              onChange={(e) => setSuit(e.target.value)}
              placeholder="Appartment, Suite etc."
            />
          </div>
          <div className="aa-checkout-single-bill">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City / Town*"
            />
          </div>
          <div className="aa-checkout-single-bill">
            <input
              type="text"
              value={distric}
              onChange={(e) => setDistric(e.target.value)}
              placeholder="District*"
            />
          </div>
          <div className="aa-checkout-single-bill">
            <input
              type="text"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Postcode / ZIP*"
            />
          </div>
          <div className="aa-checkout-single-bill">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address*"
            />
          </div>
          <div className="aa-checkout-single-bill">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone*"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BillingAddress;
