import React from 'react'
import { MdAdd, MdMinimize } from 'react-icons/md'



const CartTable = () => {
    const TableList = () => {
        return (<React.Fragment>
            <tr>
                <td className="align-middle">
                    <img src="" alt="" /> Product Name</td>
                <td className="align-middle">$150</td>
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
                <td className="align-middle"><button className="btn btn-remove"><i className="fa fa-times"></i></button></td>
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
                    <TableList></TableList>

                </tbody>
            </table>
        </div>
    )
}

export default CartTable