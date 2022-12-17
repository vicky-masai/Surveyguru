import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <>
    <Navbar />
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"200px", margin:"40px 0px 0px 0px" }}>
        <h1 style={{fontSize:"80px"}}>404 page not found</h1>
    </div>
    <center><Link to={"/"}><button
          style={{
            backgroundColor: "#FDC713",
            color: "black",
            fontWeight: "400",
            padding: "10px 30px",
            margin:"0px 0px 30px 0px",
            borderRadius: "5px"
          }}
        >
          Back to home
        </button></Link></center>
    <hr />
    <Footer />
    </>
  )
}

export default NotFound