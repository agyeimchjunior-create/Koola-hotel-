import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

export const FeaturedDestination = () => {

    const navigate = useNavigate();
  return (
    <div>
       <h1 className="
  text-2xl 
  md:text-5xl 
  lg:text-6xl 
  font-extrabold 
  text-center 
  leading-none 
  max-w-5xl 
  mx-auto
  mt-20
">
  Featured Destination
</h1>
<p className="
  text-gray-600 
  text-sm 
  md:text-base 
  lg:text-lg 
  text-center 
  max-w-2xl 
  mx-auto 
  mt-4
">
  Explore our hand-picked destinations, featuring top-rated hotels designed
  to give you comfort, style, and unforgettable experiences wherever you go.
</p>


       

    <div className="inline flex-col mx-0  items-center px-3 md:px-16 lg:px-24 bg-slate-50 py-20">
        <div className="flex basis-1/5 flex-wrap items-center justify-center gap-3 mt-10 px-4 md:px-16 lg:px-24 xl:px-32">
          {roomsDummyData.slice(0,4).map((room, index)=>(
            <HotelCard key={room._id} room={room} index={index}/>
          ))}  
        </div>
        <button onClick={() => {navigate('/rooms'); scrollTo(0, 0);}} className="block mx-auto my-16 px-4 py-2 text-sm  text-white font-medium border border-gray-300 rounded bg-red-700 hover:bg-red-500 transition duration-300 cursor-pointer">
  View All Destinations
</button>

    </div>
    </div>
  )
}

export default FeaturedDestination