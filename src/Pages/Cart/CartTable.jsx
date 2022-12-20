import React, { useState } from 'react'
import { MdAdd, MdAddShoppingCart, MdMinimize } from 'react-icons/md'
import { Data } from '../../Assets/StaticData/productFile'
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

console.log(Data);

const CartTable = () => {
    const [serachwishlist, setSerachwishlist] = useState("");
    const [quantity, setQuantity] = useState('1');
    const [Id, setId] = useState(null);
  
    const removeItem = (id)=>{
        setId(id)
        console.log(id);
    }
    const TableList = () => {
        return (<React.Fragment>
            <React.Fragment>
            {(Data.sampleData)
              .filter(data => data.Name.match(new RegExp(serachwishlist, "i")) && data.ID !== Id )
              .map((item) => {
                return (
                  <tr key={item.ID}>
                    <td >
                      <button onClick={(e)=>removeItem(item.ID)} > <MdClose  className="close"></MdClose></button>
                     
                    </td>
                    <td>
                      <Link to={`/product/${item.ID}`}>
                        <img src={item.newImage[0]} alt={item.Name} />{" "}
                      </Link>
                    </td>
                    <td>
                      <Link to={`/product/${item.ID}`}>
                        <span>{item.Name}</span>{" "}
                      </Link>
                    </td>
                    <td>
                      <span> $ {item["Regular price"]}</span>
                    </td>
                    <td>
                      <span>
                      <input type="text" value={quantity} onChange={(e)=>setQuantity(e.target.value)} className='quantity' />
                      </span>
                    </td>
                    <td>
                      <div className="total">
                        <span>{Number(quantity)*item["Regular price"]}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </React.Fragment>
        </React.Fragment>)
    }


    return (
        <div className='CartTable'>
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
          <TableList></TableList>
          </tbody>
         
        </table>
      </div>
        </div>
    )
}

export default CartTable