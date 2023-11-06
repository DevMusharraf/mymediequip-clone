import React , { useState }  from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home'
import Buy from '../pages/Buy'
import Checkout from '../pages/Checkout'
import Preown from '../pages/Preown'
import Contact from '../pages/Contact'
import Manufacturers from '../pages/Manufacturers'
import Requirement from '../pages/Requirement'
import Services from '../pages/Services'
import User from '../pages/User'
import Products from '../pages/Products'
import Cart from "../pages/Cart"
import New from "../pages/New"
import Special from "../pages/Speciality"




const AllRoutes = () => {

  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/preown' element={<Preown/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/manufacturers' element={<Manufacturers/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/requirement' element={<Requirement/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/special' element={<Special/>}/>
       
    </Routes>
    
  )
}

export default AllRoutes