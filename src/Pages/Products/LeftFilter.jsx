import React, { useEffect, useState } from "react";
import { Data } from "../../Assets/StaticData/productFile";
import { useGlobalContext } from "../../States/GlobalContext/Context";



const LeftFilter = () => {


  const { openSidebar,
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
    attributes,
    setAttributes,
    gender,
    setGender,
    loading,
    singleProduct,
    setSingleProduct,
    indexPage,
    setIndexPage,
    filterPrice,
    setFilterPrice,
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
    setSortproduct, products,productID } = useGlobalContext()



  // useEffect(() => {


  //   console.log(caterory);
  // }, []);

  let uniqueAges = Array.from(
    new Set(products?.data?.map((item) => item.attributes.categories.data[0].attributes.title))
  );
  uniqueAges = uniqueAges.filter(function (e) {
    return e;
  });

  return (
    <div className="LeftFilter">
      <div className="bycategories">
        <p className="left-heading">Filter by Categories</p>
        <ul>
          {uniqueAges.map((item, index) => (
            <li key={index}> <button onClick={(e) => setCaterory(item)}>{item}</button></li>
          ))}
        </ul>
      </div>
      <div className="byprice">
        <div className="form-group">
          <p className="left-heading">Filter by Price</p>
          <input
            type="range"
            className="form-control field"
            max={10000}
            onChange={e => setFilterPrice(e.target.value)}
            value={filterPrice}
            min={5}
          />
          <input type="text" value={filterPrice} onChange={e => setFilterPrice(e.target.value)} className="form-text field" />
        </div>
      </div>
      <div className="Gender">
        <div className="form-group">
          <p className="left-heading">Gender</p>
          <div className="input-group">

            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" onChange={() => setGender('male')} className="form-check-input" value={gender} />
                Display value
              </label>

            </div>

          </div>
        </div>
      </div>
      <div className="BRAND">
        <div className="form-group">
          <p className="left-heading">BRAND</p>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" onChange={() => setBrand('nokia')} className="form-check-input" value={brand} />
              Nokia
            </label>

          </div>

        </div>
      </div>
      <div className="Discount">
        <div className="form-group">
          <p className="left-heading">Discount</p>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" onChange={(e) => setDiscount(50)} className="form-check-input" value={discount} />
              50%
            </label>

          </div>

        </div>
      </div>
      <div className="Avalibality">
        <div className="form-group">
          <p className="left-heading">Avalibality</p>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" onChange={() => setAvaliability(true)} className="form-check-input" value={avaliability} />
              Out of Stock
            </label>

          </div>

        </div>
      </div>
    </div>
  );
};

export default LeftFilter;
