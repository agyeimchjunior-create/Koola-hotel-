import React from 'react'
import FeaturedDestination from '../components/FeaturedDestination'
import Exclusive from '../components/Exclusive'
import  Hero  from '../components/Hero'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
     <Hero />
     <FeaturedDestination />
     <Exclusive />
     <Testimonial />
     <Newsletter  />
     <Footer />
    </>
  )
}

export default Home
