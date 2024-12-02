import React from 'react'
import Hero from '../Component/Hero'
import LatestProduct from '../Component/LatestProduct'
import OurPolicy from '../Component/OurPolicy'
import NewsletterBox from '../Component/NewsletterBox'
import Footer from '../Component/Footer'
const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestProduct/>
      <OurPolicy/>
      <NewsletterBox/>
      <Footer/>
    </div>
  )
}

export default Home