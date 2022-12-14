import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navitem } from '../../Assets/StaticData/navigation'
import { MdShoppingBag,MdAccountCircle } from "react-icons/md";
import './Header.scss'
const Header = () => {
  return (
    <header className='Header'>
      <nav className='navigationheader'>
       
        <div className='leftsideHeader'>
          <ul className='headerNav'>
            {navitem.map((item) => { return <li key={item.id} className='headernavItem'><NavLink to={item.url}>{item.text}</NavLink></li>})}
          </ul>
        </div>
        <div className='logo'>
          <img src="/logo192.png" alt='' />
        </div>
        <div className='rightSideHeader'>
        {/* <ul className='headerNav'>
            {navitem.map((item) => { return <li key={item.id} className='headernavItem'><NavLink to={item.url}>{item.text}</NavLink></li>})}
          </ul> */}
          {/* <div className='rightSiteheaderElementone'>
           
          </div> */}
          <NavLink  to={'/about'}>About</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
          <div className='rightSiteheaderElementtwo'>
            <div className='cart'><MdShoppingBag className=' medium'></MdShoppingBag></div>
            <div><Link to={'/account'}><MdAccountCircle></MdAccountCircle></Link> </div>
          </div>
        </div>
       
      </nav>
    </header>
  )
}

export default Header