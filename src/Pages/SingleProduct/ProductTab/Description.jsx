import React from "react";
import { useGlobalContext } from "../../../States/GlobalContext/Context";

const Description = () => {

    const { loading, singleProduct,setproductID, setSingleProduct } = useGlobalContext();

  return (
    <div className="Description">
      <div className="DescWrapper">
        <h3 className="heading-title">Product description</h3>
        <div className="Details">
{singleProduct?.data?.attributes.longDesc}
        </div>
      </div>
    </div>
  );
};

export default Description;
