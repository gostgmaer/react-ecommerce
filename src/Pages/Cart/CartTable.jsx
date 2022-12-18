import React from 'react'
import { MdAdd, MdMinimize } from 'react-icons/md'
import { Data } from '../../Assets/StaticData/productFile'
import { MdClose } from 'react-icons/md';

console.log(Data);

const CartTable = () => {
    const TableList = ({ item }) => {
        return (<React.Fragment>
            <tr>
                <td className="align-middle">
                    <img src={item.newImage[0]} alt="" /> {item.Name}</td>
                <td className="align-middle">$ {item['Regular price']}</td>
                <td className="align-middle">
                    <div className="input-group quantity mx-auto" >
                        <button className="btn btn-minus" >
                            <MdMinimize></MdMinimize>
                        </button>
                        <span className="btn" > 1 </span>
                        <button className="btn btn-plus">
                            <MdAdd></MdAdd>
                        </button>
                    </div>
                </td>
                <td className="align-middle">$150</td>
                <td className="align-middle"><button className="btn btn-remove"><MdClose></MdClose></button></td>
            </tr>
        </React.Fragment>)
    }


    return (
        <div className='CartTable'>
            <table className="table">
                <thead className="thead">
                    <tr>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {Data.sampleData.filter(data => data['Is featured?'] === 1).map((item) => <TableList key={item.ID} item={item} ></TableList>)}


                </tbody>
            </table>
        </div>
    )
}

export default CartTable