import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({room, index}) => {
  return (
    <Link
  to={'/rooms/' + room._id}
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="relative w-full sm:max-w-60 rounded-xl overflow-hidden
             bg-white text-gray-500/90 shadow-[0_4px_4px_rgba(0,0,0,0.05)] 
             hover:-translate-y-3 transition-all duration-300"
>
  <img
    src={room.images[0]}
    alt={`${room.hotel.name} room`}
    className="w-full h-auto object-cover"
  />
  
  {index % 2 === 0 && (
    <p className="px-3 py-1 absolute top-2 left-3 text-xs bg-white
                  text-gray-800 font-medium rounded-full">
      Best Seller
    </p>
  )}

  <div className="p-2 pt-5">
    <div className="flex justify-between items-center">
      <p className="font-playfair text-xl font-medium text-gray-800">
        {room.hotel.name}
      </p>
      <div className="flex items-center gap-1 mt-3">
        <img src={assets.starIconFilled} alt="star" className="h-4 w-4" />4.5
      </div>
    </div>

    <div className="mt-2 text-gray-600 text-sm flex items-center gap-1">
      <img src={assets.locationIcon} alt="location" className="h-4 w-4" />
      <span>{room.hotel.address}</span>
    </div>

    <div className="mt-3 flex justify-between items-center">
      <p className="text-xl text-gray-800">
        <span>${room.pricePerNight}/night</span>
      </p>
      <button
        type="button"
        className="bg-red-700 text-white px-1 py-1 text-xs rounded-tr-2xl hover:bg-red-400 
                   transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Book Now
      </button>
    </div>
  </div>
</Link>

  )
}

export default HotelCard
