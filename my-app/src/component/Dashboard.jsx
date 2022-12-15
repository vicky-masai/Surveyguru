import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Loading from './Loading';
function Dashboard() {
  return (
    <>
        <Navbar />
        <div style={{marginTop:"80px"}}>
        <Loading /> 
        </div>
        <Footer />
    </>
  )
}

export default Dashboard    