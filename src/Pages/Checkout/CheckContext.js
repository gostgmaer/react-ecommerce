import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Data } from "../../Assets/StaticData/productFile";
import { DataFile } from "../../Assets/StaticData/strapi-item-inputs";
import InvokeAPI from "../../Utility/APICALL/InvokeAPI";
// @ts-ignore
const AppCheckoutContext = React.createContext();
const AppCheckoutProvider = ({ children }) => {
 
  return (
    <AppCheckoutContext.Provider
      value={{
       
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
