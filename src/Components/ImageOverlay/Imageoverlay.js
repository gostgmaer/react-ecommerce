// @ts-nocheck
import React, { useState } from "react";
// @ts-ignore
import { MdArrowRight, MdClose, MdOutlineArrowLeft } from "react-icons/md";
import { Bars } from "react-loader-spinner";
import { useGlobalContext } from "../../States/GlobalContext/Context";
import "./Imageoverlay.scss";

const Imageoverlay = () => {
  const [imageIndex, setimageIndex] = useState(0);

  const {
    isImageLitebox,
    setIsImageLitebox,
    loading,
    setloading,
    setLightboxData,
    lightboxData,
  } = useGlobalContext();

  console.log(lightboxData);
  const handleClick = (e) => {
    setIsImageLitebox(!isImageLitebox);
  };

  console.log(lightboxData);
  return (
    <>
      <div className="overlay-image-container">
        <div class="overlaywrapper">
          <div class="overlayHeading">
            <h3></h3>
            <span className="dismiss" onClick={handleClick}>
              <MdClose></MdClose>
            </span>
          </div>
          <div class="overlayBody">
            <div class="overlaymainImage">
              {/* {lightboxData?.['newImage']?.map((img,index)=>{
            return  < >
            <img src={img}  key={index} class="small-img" alt="" />
          </>
           })} */}
              <img
                src={lightboxData?.["newImage"][imageIndex]}
                class="main-img"
                alt="bigger pic"
              />
            </div>
            <div class="overlayallimages">
              <ul>
                {lightboxData?.["newImage"]?.map((img, index) => {
                  return (
                    <li onClick={() => setimageIndex(index)} key={index}>
                      <img src={img} class="small-img" alt="" />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div class="arrow">
            <span  onClick={()=>setimageIndex(imageIndex===0?setimageIndex(lightboxData['newImage'].lenght):setimageIndex(imageIndex-1))}>
              <MdOutlineArrowLeft></MdOutlineArrowLeft>
            </span>

            <span  onClick={()=>setimageIndex(imageIndex===lightboxData['newImage'].lenght?setimageIndex(0):setimageIndex(imageIndex+1))}>
              <MdArrowRight></MdArrowRight>
            </span>
          </div>
          <div class="overlayfooter"></div>
        </div>
      </div>
    </>
  );
};

export default Imageoverlay;
