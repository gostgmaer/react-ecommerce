import React from "react";
import { useGlobalContext } from "../../States/GlobalContext/Context";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import { Bars } from "react-loader-spinner";

const Productimage = () => {
  const {
    isImageLitebox,
    setIsImageLitebox,
    loading,
    setloading,
    setLightboxData,
    imageIndex,
    setimageIndex,
    lightboxData,
    calculateDiscount,
    onclickOpenImageLightBox,
    singleProduct,
    setSingleProduct,
  } = useGlobalContext();
  setloading(false);
  return (
    <div className="Productimage">
      <div className="carousel">
        <div className="carousel-inner">
          <div className="smallImages">
            <ul className="imgsmall">
              {singleProduct?.newImage?.map((image, index) => {
                return (
                  <li key={index} onClick={() => setimageIndex(index)}>
                    {" "}
                    <img
                      className=""
                      src={image}
                      alt={`${singleProduct.Name} ${index}`}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="Bigitem">
            {loading ? (
              <Bars width={200} />
            ) : (
              <img
                className="img-big"
                src={singleProduct?.newImage[imageIndex]}
                alt={singleProduct?.Name}
              />
            )}
            <div className="arrow">
              <div
                className="arrowin"
                onClick={() => {
                  setloading(true);

                  imageIndex === 0
                    ? setimageIndex(singleProduct?.newImage.length - 1)
                    : setimageIndex(imageIndex - 1);
                  setloading(false);
                }}>
                {" "}
                <MdOutlineArrowBack></MdOutlineArrowBack>{" "}
              </div>
              <div
                className="arrowin"
                onClick={() => {
                  setloading(true);
                  imageIndex === singleProduct?.newImage.length - 1
                    ? setimageIndex(0)
                    : setimageIndex(imageIndex + 1);
                  setloading(false);
                }}>
                {" "}
                <MdOutlineArrowForward></MdOutlineArrowForward>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productimage;
