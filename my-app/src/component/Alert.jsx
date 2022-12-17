import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react';
  import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
  
  function Alerts() {
    return (<>
        <Navbar />
        <div style={{width:"100%", height:"auto"}}>
        <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='500px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Application submitted!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for submitting your application. Our team will get back to you soon for further process.
  </AlertDescription>
</Alert>
<hr />

</div>
<Footer />
</>
    )
  }
  
  export default Alerts;
