import React from 'react'
import FeaturedDestination from '../components/FeaturedDestination'
import Exclusive from '../components/Exclusive'
import  Hero  from '../components/Hero'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'



const Home = () => {
  return (
    <>
     <Hero />
     <FeaturedDestination />
     <Exclusive />
     <Testimonial />
     <Newsletter  />
    </>
  )
}

export default Home
