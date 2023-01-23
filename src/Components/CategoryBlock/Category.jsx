import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../States/GlobalContext/Context";
import { baseURl } from "../../Utility/APICALL/InvokeAPI";
import "./category.scss";

const Category = () => {
  const { categories } = useGlobalContext();

  return (
    <div className="Category">
      <div className="Categories">
        <div className="col">
          <div className="row">
            <img
              src="https://ajax-filters-bc.diviengine.com/sampledata/images/Bag1.jpg"
              alt=""
            />
            <Link className="link" to={`products/sale`}>
              Sale
            </Link>
          </div>{" "}
          <div className="row">
            {" "}
            <img
              src={`${
                baseURl +
                categories?.data[0].attributes?.image.data.attributes.url
              }`}
              alt=""
            />
            <Link
              className="link"
              to={`/products/${categories?.data[0].attributes?.title.toLowerCase()}`}>
              {categories?.data[0].attributes?.title}
            </Link>{" "}
          </div>
        </div>
        <div className="col">
          <div className="row">
            {" "}
            <img
              src={`${
                baseURl +
                categories?.data[1].attributes?.image.data.attributes.url
              }`}
              alt=""
            />
            <Link
              className="link"
              to={`/products/${categories?.data[1].attributes?.title.toLowerCase()}`}>
              {categories?.data[1].attributes?.title}
            </Link>{" "}
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">
                {" "}
                <img
                  src={`${
                    baseURl +
                    categories?.data[2].attributes?.image.data.attributes.url
                  }`}
                  alt=""
                />
                <Link
                  className="link"
                  to={`/products/${categories?.data[2].attributes?.title.toLowerCase()}`}>
                  {categories?.data[2].attributes?.title}
                </Link>{" "}
              </div>
            </div>
            <div className="col">
              <div className="row">
                {" "}
                <img
                  src={`${
                    baseURl +
                    categories?.data[3].attributes?.image.data.attributes.url
                  }`}
                  alt=""
                />
                <Link
                  className="link"
                  to={`/products/${categories?.data[3].attributes?.title.toLowerCase()}`}>
                  {categories?.data[3].attributes?.title}
                </Link>{" "}
              </div>
            </div>
          </div>
          <div className="row">
            {" "}
            <img
              src={`${
                baseURl +
                categories?.data[4].attributes?.image.data.attributes.url
              }`}
              alt=""
            />
            <Link
              className="link"
              to={`/products/${categories?.data[4].attributes?.title.toLowerCase()}`}>
              {categories?.data[4].attributes?.title}
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
