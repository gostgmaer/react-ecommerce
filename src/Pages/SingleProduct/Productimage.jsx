import React from "react";
import { useGlobalContext } from "../../States/GlobalContext/Context";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import { baseURl } from "../../Utility/APICALL/InvokeAPI";

const SingleProductimage = () => {
  const { imageIndex, setimageIndex, singleProduct } =
    useGlobalContext();
  //console.log(singleProduct);
  return (
    <div className="Productimage">
      <div className="carousel">
        <div className="carousel-inner">
          <div className="smallImages">
            <ul className="imgsmall">
              {singleProduct?.data?.attributes.productImage?.data.map(
                (image, index) => {
                  return (
                    <li key={index} onClick={() => setimageIndex(index)}>
                      {" "}
                      <img
                        className=""
                        src={baseURl+image.attributes.url}
                        alt={`${singleProduct?.data?.attributes.title} ${index}`}
                      />
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div className="Bigitem">
            { <img
                className="img-big"
                src={
                  baseURl +
                  singleProduct?.data?.attributes.productImage?.data[imageIndex]
                    .attributes.url
                }
                alt={singleProduct?.data?.attributes.title}
              />}
            <div className="arrow">
              <div
                className="arrowin"
                onClick={() => {
                  

                  imageIndex === 0
                    ? setimageIndex(
                        singleProduct?.data?.attributes.productImage?.data
                          .length - 1
                      )
                    : setimageIndex(imageIndex - 1);
                
                }}>
                {" "}
                <MdOutlineArrowBack></MdOutlineArrowBack>{" "}
              </div>
              <div
                className="arrowin"
                onClick={() => {
                 
                  imageIndex ===
                  singleProduct?.data?.attributes.productImage?.data.length - 1
                    ? setimageIndex(0)
                    : setimageIndex(imageIndex + 1);
               
                }}>
                {" "}
                <MdOutlineArrowForward></MdOutlineArrowForward>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductimage;
