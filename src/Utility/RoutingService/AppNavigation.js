import React from 'react'
// @ts-ignore
import { Route, Routes } from 'react-router-dom'
import CartPage from '../../Pages/Cart/CartPage'
import Checkout from '../../Pages/Checkout/Checkout'
import Homepage from '../../Pages/Home/Homepage'
import Product from '../../Pages/Product/Product'
import Products from '../../Pages/Products/Products'
import Registration from '../../Pages/Registration/Registration'
import Signin from '../../Pages/Signin/Signin'
import SingleProduct from '../../Pages/SingleProduct/SingleProduct'
import Wishlist from '../../Pages/Wishlist/Wishlist'


const AppNavigation = () => {
  return (
    <React.Fragment>
        <Routes>
            <Route 
// @ts-ignore
            element={<Homepage></Homepage>} path='/'/>
            <Route 
// @ts-ignore
            element={<Signin></Signin>} path='/signin' ></Route>
            <Route 
// @ts-ignore
            element={<Registration></Registration>} path='/signup' ></Route>
            <Route 
// @ts-ignore
            element={<Wishlist></Wishlist>} path='/wishlist' ></Route>
            <Route path='/product/:id' element={<SingleProduct></SingleProduct>}></Route>
            <Route path='/cart' element={<CartPage></CartPage>}></Route>
            <Route path='/products' element={<Products></Products>} ></Route>
            <Route path='/products/:id' element={<Products></Products>} ></Route>
            <Route path='/checkout' element={<Checkout></Checkout>}/>

        </Routes>
        

    </React.Fragment>
  )
}

export default AppNavigation