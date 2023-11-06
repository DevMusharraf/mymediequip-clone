import React from 'react'
import Navbar from '../components/navbar'; 
import Footer from '../components/Footer';
import Require from '../components/requirement';
import Contact from "../components/contact";

function Requirement() {
  return (
    <div>
         <Navbar/>
         <Contact/>
        <Require/>
        <Footer/>

    </div>
  )
}

export default Requirement