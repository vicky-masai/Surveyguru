import React from 'react'
import { Link } from "react-router-dom";
import { Image } from '@chakra-ui/image';
function UserDashboard() {
  return (<>
    <center><Link to={"/"}><Image src="images/SurveyGuru.png" alt="Dan Abramov" style={{cursor:"pointer",marginTop:"30px"}} /></Link></center>
    <h1 style={{textAlign:"center", fontSize:"30px", fontWeight:"600"}}>Your application stills under process</h1>
    </>
  )
}

export default UserDashboard