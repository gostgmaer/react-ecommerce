// @ts-nocheck
import React from "react";
// @ts-ignore
import { MdArrowRight, MdOutlineArrowLeft } from "react-icons/md";
import { Bars } from "react-loader-spinner";
import { useGlobalContext } from "../../States/GlobalContext/Context";
import "./Imageoverlay.scss";

const Imageoverlay = () => {
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
  return (
    <>
      <div className="overlay dismiss" onClick={handleClick}>
        {loading ? (
          <Bars width={''} height = '200'></Bars>
        ) : (
          <img src={lightboxData.image} alt="bigger pic" />
        )}
        <span className="dismiss" onClick={handleClick}>
          X
        </span>
        <div className="overlay-arrows_left">
          <div>
            <MdOutlineArrowLeft></MdOutlineArrowLeft>
          </div>
        </div>
        <div className="overlay-arrows_right">
          <div>
            <MdArrowRight></MdArrowRight>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imageoverlay;
