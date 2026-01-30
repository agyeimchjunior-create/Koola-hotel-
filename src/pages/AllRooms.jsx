import React, { useState } from 'react'
import { roomsDummyData, assets, facilityIcons } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const CheckBox = ({label,  onChange = () => {}}) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
<input type="checkbox"  onChange={(e)=>onChange(e.target.checked, label)}/>
<span className="font-light select-none">{label}</span>
    </label>
  )

}
const RadioButton = ({label, selected = false, onChange = () => {}}) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
<input type="radio" name='sortOption'  onChange={()=>onChange(label)}/>
<span className="font-light select-none">{label}</span>
    </label>
  )

}

  
const AllRooms = () => {
  const navigate = useNavigate()
  const [ openFilters, setOpenFilters ] = useState(false)
  

  const roomTypes =[
    "Single bed",
    "Double bed",
    "Luxury Room",
    "Family Suite",
  ];
  const priceRanges = [
    "0 to 500",
    "500 - 1000",
    "1000 to 2000",
    "2000 to 3000",
  ];

  const sortOptions = [
    "Price Low to High",
    "Price High to Low",
    "Newest First",
  ];

  const goToRoom = (id) => {
    navigate(`/rooms/${id}`)
    window.scrollTo(0, 0)

  }

  return (
    <div className="flex flex-col-reverse  lg:flex-row items-start pt-8 px-5 md:px-24 gap-10">
      
      {/* LEFT SIDE */}
      <div className="flex-1">
        <div className="flex flex-col items-start mb-10">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold mt-20 leading-none">
            Hotel Rooms
          </h1>
          <p className="text-sm md:text-base text-gray-500 mt-2 max-w-xl">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>

        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className="flex flex-col md:flex-row gap-6 mb-12 items-start"
          >
            {/* Image */}
            <img
              onClick={() => goToRoom(room._id)}
              src={room.images[0]}
              alt="hotel"
              className="md:w-1/2 max-h-64 rounded-xl shadow-xl object-cover cursor-pointer"
            />

            {/* Content */}
            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{room.hotel.city}</p>

              <h2
                onClick={() => goToRoom(room._id)}
                className="text-gray-800 text-3xl font-semibold cursor-pointer"
              >
                {room.hotel.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    src={assets.starIconFilled}
                    alt="star"
                  />
                ))}
                <p className="ml-2 text-sm text-gray-500">
                  200+ reviews
                </p>
              </div>

              {/* View details */}
              <button
                onClick={() => goToRoom(room._id)}
                className="text-sm text-blue-600 underline w-fit mt-2"
              >
                View room details
              </button>

              {/* Amenities – NOW CORRECTLY PLACED */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                {room.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f5f5ff]/70"
                  >
                    <img
                      src={facilityIcons[item]}
                      alt={item}
                      className="h-5 w-5"
                    />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>
              {/*room price per night */}
              <p className="text-xl font-medium text-red-700">${room.pricePerNight}/night</p>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE – FILTERS */}
      <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16 mt-20">
      <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-800 ${openFilters && "border-b"}`}>
       <p className="text-base font-medium text-gray-800">FILTERS</p>
       <div className="text-xs cursor-pointer">
        <span onClick={()=>setOpenFilters(!openFilters)} className="lg:hidden">{openFilters ? "HIDE" : "SHOW"}</span>
        <span className="hidden lg:block">
          CLEAR
        </span>
       </div>
      </div>
      <div className={`${openFilters ? 'h-auto' : "h-0 lg:h-auto"} overflow-hidden transition-all duration-700`}>
       <div className="px-5 pt-5">
        <p className="font-medium text-gray-800 pb-2">Popular filters</p>
        {roomTypes.map((room, index)=>(
          <CheckBox key={index} label={room} />
        ))}
       </div>
        <div className="px-5 pt-5">
        <p className="font-medium text-gray-800 pb-2">Price Range</p>
        {priceRanges.map((range, index)=>(
          <CheckBox key={index} label={`$ ${range}`} />
        ))}
       </div>
        <div className="px-5 pt-5 pb-5 md:pt-4 md:mt-10">
        <p className="font-medium text-gray-800 pb-2">Sort By</p>
        {sortOptions.map((option, index)=>(
          <RadioButton key={index} label={option} />
        ))}
       </div>
      </div>
      
      </div>
    </div>
  )
}

export default AllRooms
