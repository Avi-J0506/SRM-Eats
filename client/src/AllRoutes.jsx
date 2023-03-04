import React from 'react'
import {Routes,Route} from 'react-router-dom'

import {Landing} from './Pages/Landing/Landing'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'

const AllRoutes = (props) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Landing state={props.state}/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Auth' element={<Auth state={props.state}/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes