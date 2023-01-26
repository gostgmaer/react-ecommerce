import React from 'react'
import { MdCheck } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../States/GlobalContext/Context'
import './confirmPayment.scss'
import { addToCart, removefromCart, resetCart } from "../../Redux/CartReducer";
import { useDispatch, useSelector } from 'react-redux'


const ConfirmpaymentModal = () => {
  const products = useSelector((state) => state['cart'].products);
  const dispatch = useDispatch();

  const {isCOnfirm, setIsCOnfirm} =useGlobalContext()

const updatePayment = ()=>{
  setIsCOnfirm(false)
  dispatch(resetCart())

}

  return (
    <div className='ConfirmpaymentModal'>
        <div className="confirmWrapper">
            <div className="icon"><MdCheck></MdCheck></div>
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eveniet in reiciendis repudiandae dolores perferendis. Quaerat veniam ducimus ex odit deleniti sint ipsa fugiat, dolores mollitia distinctio dicta, possimus numquam.</div>
            <div className="btn-block"><Link onClick={updatePayment} to={'/shop'} className='btn btn-confirm'>Ok</Link></div>
        </div>
    </div>
  )
}

export default ConfirmpaymentModal