import React, { useEffect, useState } from "react";
// import { products } from '../../Assets/StaticData/Data'
import { Data } from "../../Assets/StaticData/productFile";

import ProductCard from "../../Components/ProductCard/ProductCard";
import { useGlobalContext } from "../../States/GlobalContext/Context";

const RelatedProduct = ({ id }) => {
  const [array, setArray] = useState(null);

  const { singleProduct, products,productID } = useGlobalContext();

  const newAttributs = () => {
    // console.log(singleProduct, products);
    setArray(
      products?.data?.filter(
        (item) =>
          item.attributes.categories.data[0].attributes.title ===
          singleProduct?.data?.attributes.categories.data[0].attributes.title
      )
    );
  };
  useEffect(() => {
    newAttributs();
    // console.log(array);
  }, []);

  return (
    <div className="RelatedProduct">
      <div className="reatedheading">Related Product {}</div>
      <ul className="relatedProductwrapper">
        {(products?.data
          ?.filter(
            (item) =>
              item.attributes.categories.data[0].attributes.title ===
              singleProduct?.data?.attributes.categories.data[0].attributes
                .title
          ))?.filter(item=>item.id !== singleProduct?.data?.id)
          ?.slice(0,4).map((item) => (
            <ProductCard key={item.id} item={item}></ProductCard>
          ))}
      </ul>
    </div>
  );
};

export default RelatedProduct;
