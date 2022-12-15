import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Pricing from './Pricing'
import Survey from './Survey'
import Footer from './Footer'
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