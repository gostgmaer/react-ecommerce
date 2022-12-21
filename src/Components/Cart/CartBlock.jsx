import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md';
import { Data } from '../../Assets/StaticData/productFile';
import './CartBlock.scss'


console.log(Data);

const CartBlock = () => {

  const [products, setProducts] = useState([]);

  const CartWrapper = () => {
    return <React.Fragment>
      <h2>Product in your cart</h2>
      {/* {products?.map((item) => {
        return (
          <div className="item" key={item.id}>
            <img src={`http://localhost:1337${item.image}`} alt="" />
            <div className="details">
              <h3>{item.title}</h3>
              <p>{item["desc"].substring(0, 50)}</p>
              <div className="price"> {item.quantity} X ${item["price"]} </div>
            </div>
            <div className="delete" onClick={()=>dispatch(removefromCart(item.id))} ><MdDelete ></MdDelete></div>
          </div>
        );
      })} */}
       <div className="item">
            <img src={Data.sampleData[0].newImage[0]} alt="" />
            <div className="details">
              <h3>{Data.sampleData[0].Name}</h3>
              <p>{Data.sampleData[0].Description}</p>
              <div className="price"> {2} X ${Data.sampleData[0]['Regular price']} </div>
            </div>
            <div className="delete"><MdDelete ></MdDelete></div>
          </div>
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$ {120}</span>
      </div>
      <button className="checkout" > CheckOut Product </button>
       <span className="reset" >Reset Cart</span>
    </React.Fragment>
  }




  return (
    <div className='CartBlock'>

      <div className="cartWrapper">
        <CartWrapper></CartWrapper>
      </div>
    </div>
  )
}

export default CartBlock