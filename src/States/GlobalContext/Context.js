
import React, { useState, useEffect, useContext } from "react";
// @ts-ignore
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isSidebar, setisSidebar] = useState(false);
  const [isImageLitebox, setIsImageLitebox] = useState(false);
  const [lightboxData, setLightboxData] = useState(null);
  const [keyword, setkeyword] = useState("");
  const [loading, setloading] = useState(true);
  const [singleProduct, setSingleProduct] = useState(null);

  const openSidebar = () => {
    setisSidebar(true);
  };
  const closeSidebar = () => {
    setisSidebar(false);
  };

  const calculateDiscount=(original,sale)=>{
    let onePercent = original/100;
    let diff = original-sale;
    let discount = diff/onePercent;
   return (diff/onePercent).toFixed(1);
  
  }

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        isImageLitebox,setIsImageLitebox,setLightboxData,lightboxData,isSidebar,setisSidebar,
        setkeyword,calculateDiscount,
        loading,singleProduct, setSingleProduct,

        setloading,
      }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
