import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Data } from "../../Assets/StaticData/productFile";
import { DataFile } from "../../Assets/StaticData/strapi-item-inputs";
import InvokeAPI from "../../Utility/APICALL/InvokeAPI";
// @ts-ignore
const AppCheckoutContext = React.createContext();
const AppCheckoutProvider = ({ children }) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [Company, setCompany] = useState("");
    const [country, setCountry] = useState("");
    const [streetAdd, setStreetAdd] = useState("");
    const [suit, setSuit] = useState("");
    const [city, setCity] = useState("");
    const [distric, setDistric] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pin, setPin] = useState("");
  return (
    <AppCheckoutContext.Provider
      value={{
        fname, setFname,lname, setLname,Company, setCompany,country, setCountry,streetAdd, setStreetAdd,
        suit, setSuit,city, setCity,distric, setDistric,email, setEmail,phone, setPhone,pin, setPin
      }}>
      {children}
    </AppCheckoutContext.Provider>
  );
};
// make sure use
export const useCheckoutContext = () => {
  return useContext(AppCheckoutContext);
};

export { AppCheckoutContext, AppCheckoutProvider };
