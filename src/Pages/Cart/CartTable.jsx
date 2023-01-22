import React, { useState } from "react";
import { MdAdd, MdAddShoppingCart, MdMinimize } from "react-icons/md";
import { Data } from "../../Assets/StaticData/productFile";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../States/GlobalContext/Context";
import TableList from "./TableData";
import { useSelector } from "react-redux";

// console.log(Data);

const CartTable = () => {
  const [serachwishlist, setSerachwishlist] = useState("");

  const [Id, setId] = useState(null);
  const products = useSelector((state) => state['cart'].products);

  return (
    <div className="CartTable">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {/* {Data.sampleData
              .filter(
                (data) =>
                  data.Name.match(new RegExp(serachwishlist, "i")) &&
                  data.ID !== Id
              )
              .map((item) => {
                return (
                  <TableList
                    Id={Id}
                    setId={setId}
                    key={item.ID}
                    item={item}></TableList>
                );
              })} */}
               {products?.map((item) => {
                return (
                  <TableList
                   key={item.id}
                    item={item}></TableList>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartTable;
