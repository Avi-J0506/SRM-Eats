import React from 'react'
import {Routes,Route} from 'react-router-dom'

import {Landing} from './Pages/Landing/Landing'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Auth' element={<Auth/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes