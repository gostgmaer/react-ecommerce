import React from 'react'
import { MdCheck } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ConfirmpaymentModal = () => {
  return (
    <div className='ConfirmpaymentModal'>
        <div className="confirmWrapper">
            <div className="icon"><MdCheck></MdCheck></div>
            <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eveniet in reiciendis repudiandae dolores perferendis. Quaerat veniam ducimus ex odit deleniti sint ipsa fugiat, dolores mollitia distinctio dicta, possimus numquam.</div>
            <div className="btn"><Link to={'./products'} className='btn btn-confirm'></Link></div>
        </div>
    </div>
  )
}

export default ConfirmpaymentModal