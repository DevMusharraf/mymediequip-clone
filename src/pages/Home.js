import React from 'react'
import Content from '../components/Content';
import Navbar from '../components/navbar'; 
import Footer from '../components/Footer';
import "../components/content.css";



function Home() {
  return (
    <div>
        <Navbar />
        <Content />
        <Footer />
    </div>
  )
}

export default Home