import React, { useState } from 'react'
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Data } from '../../Assets/StaticData/productFile';

const TableList = ({ item, Id, setId }) => {
    const [quantity, setQuantity] = useState('1')



    const removeItem = (id) => {
        setId(id)
        console.log(id);
    }

    return (<React.Fragment>
        <tr key={item.ID}>
            <td >
                <button onClick={(e) => removeItem(item.ID)} > <MdClose className="close"></MdClose></button>

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
                    <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className='quantity' />
                </span>
            </td>
            <td>
                <div className="total">
                    <span>{(Number(quantity) * item["Regular price"]).toFixed(2)}</span>
                </div>
            </td>
        </tr>
    </React.Fragment>)
}

export default TableList