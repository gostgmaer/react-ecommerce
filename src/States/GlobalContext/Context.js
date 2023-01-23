import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Data } from "../../Assets/StaticData/productFile";
import { DataFile } from "../../Assets/StaticData/strapi-item-inputs";
import InvokeAPI from "../../Utility/APICALL/InvokeAPI";

// @ts-ignore
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isSidebar, setisSidebar] = useState(false);
  const [isImageLitebox, setIsImageLitebox] = useState(false);
  const [lightboxData, setLightboxData] = useState(null);
  const [keyword, setkeyword] = useState("");
  const [productID, setproductID] = useState();
  const [loading, setloading] = useState(false);
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
  const [openCart, setOpenCart] = useState(false);
  const [wishList, setWishList] = useState(null);

  const onclickOpenImageLightBox = (id) => {
    setloading(true);
    setLightboxData(products?.data.find((item) => item.id === id));
    setIsImageLitebox(true);
    setloading(false);
    console.log(lightboxData);
  };
  const cartPanelHandle=()=>{
    setOpenCart(!openCart)
  }

  const addToWishList =(id)=>{
    let data = products?.data.find((item) => item.id === id);
    setWishList(data)
    console.log(wishList);

  }
  const getSingleProduct = async ()=>{
   
      const res = await InvokeAPI(
        `products/${productID}`,
        "get",
        "",
        "",
        { populate: "*", },
        ""
      );
   
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

  const TaxCalculate = (base,rate)=>{
   // console.log((base/100)*rate);
    return (base/100)*rate;


  }
  const TotalSum =(val1,val2)=>{
    return Number(val1)+Number(val2)

  }
  
  const totalprice = (data) => {
    let total = 0;
    data.forEach((element) => {
      total += element.quantity * element.price;
    });
    return total.toFixed(2);
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
        isSidebar,openCart,
        setisSidebar,
        setkeyword,totalprice,
        calculateDiscount,
        onclickOpenImageLightBox,
        attributes,ScrollToTop,
        setAttributes,
        gender,setproductID,
        setGender,
        loading,addToWishList,
        singleProduct,
        setSingleProduct,
        indexPage,
        setIndexPage,
        filterPrice,
        setFilterPrice,products,
        caterory,
        setCaterory,
        imageIndex,
        setimageIndex,TotalSum,
        setloading,
        discount,
        setDiscount,cartPanelHandle,
        brand,
        setBrand,
        avaliability,
        setAvaliability,TaxCalculate,
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
