import React from 'react'
import hero from '../assets/heroImage.png'
import heroVideo from '../assets/hero-video.mp4'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
        <div className="absolute inset-0 bg-black/50">
      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
      
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Discover Your Perfect Gateway Destination
        </h1>

        <p className="text-lg md:text-xl text-white mb-8 drop-shadow-lg">
          Find and book amazing hotels at unbeatable prices.
        </p>
         <div className="inline-block py-5 ">
        <button onClick={() => navigate('/explore')} className=" mx-auto bg-transparent  border-2 border-white px-6 py-4 rounded-full text-white font-semibold hover:bg-red-700 transition">
          Explore More
        </button>
        <button onClick={()=> navigate('/rooms')} className=" mx-3 bg-transparent   border-2 border-white px-6 py-4 rounded-full text-white font-semibold hover:bg-red-700 transition cursor-pointer">
          Book Us Now
        </button>
        </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Hero
