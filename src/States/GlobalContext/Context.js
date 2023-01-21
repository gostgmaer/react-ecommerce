import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Data } from "../../Assets/StaticData/productFile";
import InvokeAPI from "../../Utility/APICALL/InvokeAPI";
// @ts-ignore
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isSidebar, setisSidebar] = useState(false);
  const [isImageLitebox, setIsImageLitebox] = useState(false);
  const [lightboxData, setLightboxData] = useState(null);
  const [keyword, setkeyword] = useState("");
  const [productID, setproductID] = useState();
  const [loading, setloading] = useState(true);
  const [singleProduct, setSingleProduct] = useState(null);
  const [imageIndex, setimageIndex] = useState(0);
  const [indexPage, setIndexPage] = useState(1);
  const [filterPrice, setFilterPrice] = useState(0);
  const [caterory, setCaterory] = useState("");
  const [tag, setTag] = useState("");
  const [attributes, setAttributes] = useState("");
  const [gender, setGender] = useState("");
  const [discount, setDiscount] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [brand, setBrand] = useState("");
  const [avaliability, setAvaliability] = useState(null);
  const [sortproduct, setSortproduct] = useState("");
  const [products, setProducts] = useState(null);
  const onclickOpenImageLightBox = (id) => {
    setloading(true);
    setLightboxData(Data.sampleData.find((data) => data.ID === id));
    setIsImageLitebox(true);
    setloading(false);
  };

  const getSingleProduct = async ()=>{
   
      const res = await InvokeAPI(
        `products/${productID}`,
        "get",
        "",
        "",
        { populate: "*" },
        ""
      );
     console.log(res);
     setSingleProduct(res)
     
  }
  const getfeatureData = async (param) => {
    const res = await InvokeAPI(
      "products",
      "get",
      "",
      "",
      { populate: "*" },
      ""
    );
    //  console.log(res);
    setProducts(res);
  };
  useEffect(() => {
    getfeatureData();
   
  }, []);
  useEffect(() => {
    productID && getSingleProduct()
  
   
  }, [productID]);

  const openSidebar = () => {
    setisSidebar(true);
  };
  const closeSidebar = () => {
    setisSidebar(false);
  };

  const ScrollToTop =()=>{
    const {pathname}= useLocation()

    useEffect(() => {
      window.scrollTo(0,0);
    
    }, [pathname]);
    return null;
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decressQuantity = () => {
    setQuantity(quantity < 2 ? 1 : quantity - 1);
  };
  const calculateDiscount = (original, sale) => {
    let onePercent = original / 100;
    let diff = original - sale;

    return (diff / onePercent).toFixed(1);
  };

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        isImageLitebox,
        setIsImageLitebox,
        setLightboxData,
        lightboxData,
        isSidebar,
        setisSidebar,
        setkeyword,
        calculateDiscount,
        onclickOpenImageLightBox,
        attributes,ScrollToTop,
        setAttributes,
        gender,setproductID,
        setGender,
        loading,
        singleProduct,
        setSingleProduct,
        indexPage,
        setIndexPage,
        filterPrice,
        setFilterPrice,products,
        caterory,
        setCaterory,
        imageIndex,
        setimageIndex,
        setloading,
        discount,
        setDiscount,
        brand,
        setBrand,
        avaliability,
        setAvaliability,
        sortproduct,
        setSortproduct,quantity, setQuantity,increaseQuantity,decressQuantity
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
