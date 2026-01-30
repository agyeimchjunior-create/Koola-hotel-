import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'
import hostPicture from '../assets/me.jpg'


const RoomDetails = () => {
  const { id } = useParams()
  const[ room, setRoom] = useState(null)
  const[ mainImage, setMainImage] = useState(null)
  useEffect(()=> {
   const room =  roomsDummyData.find(room => room._id === id)
   room && setRoom(room)
   room && setMainImage(room.images[0])
  },[])

  return room && (
    <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
    {/* room details */}
    <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
      <h1 className="text-3l md:text-4xl font-playfair">{room.hotel.name} <span className="font-inter text-sm">({room.roomType})</span></h1>
      <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full"> 20% OFF</p>
    </div>
    <div>
      <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, index) => (
                        <img
                          key={index}
                          src={assets.starIconFilled}
                          alt="star"
                        />
                      ))}
       
    </div>
      <p className="ml-2"> 200+ reviews</p>
    </div>
    <div className="flex items-center gap-1 text-gray-500 mt-2">
      {/* room address */}
      <img src={assets.locationIcon} alt="location-icon" />
      <span>{room.hotel.address}</span>
    </div>
    {/*room images */}
    <div className="flex flex-col lg:flex-row mt-6 gap-6">
      <img src={mainImage} alt="room image" className="w-full rounded-xl shadow-lg object-cover" />
    </div>
    <div className="grid grid-cols-4 mt-4 gap-4 lg:w-1/1.3 w-full" >
      {room ?.images.length > 1 && room.images.map((image, index)=>(
       <img onClick={()=>setMainImage(image)}
       key={index}src={image} className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${ mainImage === image & "outline-3 outline-orange-500"}`}
       ></img>
      
      ))}
    </div>
    {/*Room Highlights*/}
    <div className="flex flex-col md:flex-row md:justify-between mt-10" >
     <div className="flex flex-col">
      <h1 className="text-3xl md:text-4xl font-playfair">
        Experience Luxury Like Never Before
      </h1>
      <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
        {room.amenities.map((item, index)=>(
          <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
            <img src={facilityIcons[item]} alt={item}  className="w-5 h-5"/>
            <p className="text-xs">{item}</p>
            </div>
        ))}

      </div>
     </div>
     <p className="text-2xl font-medium">${room.pricePerNight}/night</p>
    </div>
     {/*checkIn Checkout Form */}
     {/* Check-in / Check-out / Guests */}
<form>
  <div className="flex flex-col md:flex-row items-end gap-4 md:gap-6 mt-8">

    {/* Check-In */}
    <div className="flex flex-col w-full md:w-auto">
      <label htmlFor="checkInDate" className="font-medium text-gray-600">
        Check-In
      </label>
      <input
        type="date"
        id="checkInDate"
        className="rounded border border-gray-300 px-3 py-2 mt-1 outline-none"
        required
      />
    </div>

    {/* Check-Out */}
    <div className="flex flex-col w-full md:w-auto">
      <label htmlFor="checkOutDate" className="font-medium text-gray-600">
        Check-Out
      </label>
      <input
        type="date"
        id="checkOutDate"
        className="rounded border border-gray-300 px-3 py-2 mt-1 outline-none"
        required
      />
    </div>

    {/* Guests */}
    <div className="flex flex-col w-full md:w-24">
      <label htmlFor="guests" className="font-medium text-gray-600">
        Guests
      </label>
      <input
        type="number"
        id="guests"
        min="1"
        placeholder="1"
        className="rounded border border-gray-300 px-3 py-2 mt-1 outline-none"
        required
      />
    </div>

    {/* Button */}
   <button
  type="submit"
  className="
    bg-orange-500 hover:bg-orange-600
    text-white font-medium
    rounded-md
    w-full md:w-auto

    px-6 py-3        /* mobile (default) */
    md:px-4 md:py-2  /* medium = smaller */
    lg:px-6 lg:py-3  /* large = normal */

    text-base md:text-sm lg:text-base
    transition-all active:scale-95
  "
>
  Check Availability
</button>


  </div>
</form>
    {/*Common Specification*/}
    <div className="mt-25 space-y-4">
     {roomCommonData.map((spec, index) => (
      <div key={index} className="flex items-start gap-2">
       <img src={spec.icon}alt={`${spec.title}-icon`}  className="w-6.5"/>
       <div>
        <p className="text-base">{spec.title}</p>
        <p className="text-gray-500">{spec.description}</p>
       </div>

       </div>

     ))}
    </div>
    <div className="max-3xl border-y border-gray-300 my-15 py-10 text-gray-500">
      <p>Guests will be allocated on the ground floor according to availability.
        You get a comfortable Two bedroom apartment has a true city feeling. the 
        price quoted is for two guest, at the guest slot please mark the number of 
        guest to get the exact price for groups. The Guests will be allocated 
        ground floor according to availability. You ge the comfortable two bedroom
        apartment that has a true city feeling.

      </p>
    </div>
    {/*Hosted  */}
    <div className="flex flex-col items-start gap-4">
     <img src={hostPicture} alt="host" className="h-14 w-14 md:h-18 md:w-18 rounded-full" />
    </div>
    <div className="flex gap-4">
      <p className="text-lg md:text-xl">Hosted by {room.hotel.name}</p>
      <div className="flex items-center gap-1 py-1">
                      {[...Array(5)].map((_, index) => (
                        <img
                          key={index}
                          src={assets.starIconFilled}
                          alt="star"
                        />
                      ))}
         <p className="ml-2">200+ reviews</p>             
       
    </div>
    </div>
    <button className="  mt-3 px-6 py-2.5 rounded text-white bg-red-700 hover:bg-red-500 transition-all cursor-pointer">Contact Now </button>

     </div>
  
     

     
    
  )
}

export default RoomDetails
