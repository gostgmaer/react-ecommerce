import React, { useState } from "react";
import { MdList, MdSdCard } from "react-icons/md";
import { useGlobalContext } from "../../States/GlobalContext/Context";
// import BropDownMenu from './BropDownMenu';

const TopSort = () => {
  

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
        setSortproduct } = useGlobalContext()


    const BropDownMenu = () => {

        // console.log(sortproduct);

        return (
            <div className="BropDownMenu">
                {/* <div className="btn-group">
          <button
            type="button"
            onClick={() => setOpenFilter(!openFilter)}
            className="btn btn-listcoount"
            data-toggle="dropdown">
            Sory by
          </button>
          <div className={`dropdown-memu element ${openFilter ? "show" : ""}`}>
            <span className="dropdown-item">Sort By</span>
          </div>
        </div> */}
                <div className="sortProduct">
                    <span className="sortBy">Sort By -</span>
                    <div className="popularity" onClick={(e) => setSortproduct('popular')}>Popularity</div>
                    <div className="lwotoHigh" onClick={(e) => setSortproduct('asc')}>Price - Low to High</div>
                    <div className="hightolow" onClick={(e) => setSortproduct('desc')}>Price - High to Low</div>
                    <div className="newFrist" onClick={(e) => setSortproduct('new')}>Newest First</div>
                </div>
            </div>
        );
    };

    return (
        <div className="TopSort">
            <div className="container">
                <div className="viewGroup">
                    <button className="btn card">
                        <MdSdCard></MdSdCard>
                    </button>
                    <button className="btn list">
                        <MdList></MdList>
                    </button>
                </div>
                <div className="sortingGroup">
                    <BropDownMenu></BropDownMenu>
                </div>
            </div>
        </div>
    );
};

export default TopSort;
