import React from 'react'
import {Routes,Route} from 'react-router-dom'

import {Landing} from './Pages/Landing/Landing'
import Home from './Pages/Home/Home'
import ShopMenu from './Pages/Home/ShopMenu'
import Auth from './Pages/Auth/Auth'
import Cart from './Pages/Cart/Cart'

const AllRoutes = (props) => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Landing state={props.state} selectedValue={props.selectedValue} handleChange={props.handleChange}/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/ShopMenu' element={<ShopMenu/>}/>
        <Route path='/Auth' element={<Auth state={props.state}/>}/>
        <Route path='/Cart' element={<Cart/>}/> 
    </Routes>
    </>
  )
}

export default AllRoutes