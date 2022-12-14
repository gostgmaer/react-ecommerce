import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../../Pages/Home/Homepage'

const AppNavigation = () => {
  return (
    <React.Fragment>
        <Routes>
            <Route element={<Homepage></Homepage>} path='/'/>
        </Routes>
        

    </React.Fragment>
  )
}

export default AppNavigation