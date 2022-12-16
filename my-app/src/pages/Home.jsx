import React from 'react'
import Hero from '../pages/Hero'
import Navbar from '../component/Navbar'
import Pricing from '../component/Pricing'
import Survey from '../component/Survey'
import Footer from '../component/Footer';
function Home() {
  return (
   <>
   <Navbar />
   <Hero/>
   <Pricing />
      <Survey />
      <Footer />
   </>
  )
}

export default Home     