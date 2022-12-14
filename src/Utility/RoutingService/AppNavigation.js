import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../../Pages/Home/Homepage'
import Registration from '../../Pages/Registration/Registration'
import Signin from '../../Pages/Signin/Signin'

const AppNavigation = () => {
  return (
    <React.Fragment>
        <Routes>
            <Route element={<Homepage></Homepage>} path='/'/>
            <Route element={<Signin></Signin>} path='/signin' ></Route>
            <Route element={<Registration></Registration>} path='/signup' ></Route>
        </Routes>
        

    </React.Fragment>
  )
}

export default AppNavigation