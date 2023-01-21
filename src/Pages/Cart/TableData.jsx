import React, { useState } from "react";
import { MdAdd, MdClose, MdMinimize } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Data } from "../../Assets/StaticData/productFile";
import { removefromCart } from "../../Redux/CartReducer";
import { useGlobalContext } from "../../States/GlobalContext/Context";
import { baseURl } from "../../Utility/APICALL/InvokeAPI";

const TableList = ({ item }) => {
  const [quantity, setQuantity] = useState("1");
  const dispatch = useDispatch();
  const { totalprice } = useGlobalContext();
  //   const removeItem = (id) => {
  //     setId(id);
  //     console.log(id);
  //   };
//   const increaseQuantity = () => {
//     setQuantity(item.quantity + 1);
//   };
//   const decressQuantity = () => {
//     setQuantity(item.quantity < 2 ? 1 : item.quantity - 1);
//   };

  return (
    <React.Fragment>
      <tr>
        <td>
          <button onClick={(e) => dispatch(removefromCart(item.id))}>
            {" "}
            <MdClose className="close"></MdClose>
          </button>
        </td>
        <td>
          <Link to={`/product/${item.id}`}>
            <img src={`${baseURl + item?.image}`} alt={item.Name} />{" "}
          </Link>
        </td>
        <td>
          <Link to={`/product/${item.id}`}>
            <span>{item.title}</span>{" "}
          </Link>
        </td>
        <td>
          <span> $ {item["price"]}</span>
        </td>
        <td>
          {/* <MdMinimize
            onClick={decressQuantity}
            className="btn btn-p"></MdMinimize> */}

          <span className="value">{item.quantity}</span>

          {/* <MdAdd onClick={increaseQuantity} className="btn btn-s"></MdAdd> */}
        </td>
        <td>
          <div className="total">
            <span>{(Number(item.quantity) * item["price"]).toFixed(2)}</span>
          </div>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default TableList;
