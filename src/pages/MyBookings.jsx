import React from 'react' 
import { assets, userBookingsDummyData } from '../assets/assets'
import { useState } from 'react'


const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData)

  return (
    <div>
      <div className="font-playfair mt-30 px-5 md:px-24">
       <h1 className="text-4xl mt-5 text-start">My Bookings</h1>
       <p className="text-sm mt-3 text-start">Easily Manage your past, current and 
        upcoming hotel reservations in one place. Plan your trips seamlessly with
        just a few clicks </p>
      </div>
       <div className="max-w-6xl mt-8 w-full text-gray-800 px-5">
       <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b
      border-gray-300 font-medium text-base py-3 px-5 ml-4">
        <div className="w-1/3">Hotels</div>
        <div className="w-1/3">Date & Timings</div>
        <div className="w-1/3">Payment</div>

      </div>
        {bookings.map((booking)=>(
         <div key={booking._id} className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full
         border-b border-gray-300 py-6 first:border-t">
            {/*-------Hotel Details----*/}
            <div className="flex flex-col md:flex-row">
              <img src={booking.room.images[0]} alt="hotel-img" className="min-md:w-44 rounded shadow object-cover" />
              <div className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4">
                <p className="font-playfair text-2xl">{booking.hotel.name}
                  <span className="font-inter text-sm"> ({booking.room.roomType})</span>
                 </p>
                 <div className="flex items-center gap-1 text-sm text-gray-500">
                      <img src={assets.locationIcon} alt="location-icon"  />
                      <span>{booking.hotel.address}</span>
                 </div>
                 <div className="flex items-center gap-1 text-sm text-gray-500">
                      <img src={assets.guestsIcon} alt="guest-icon"  />
                      <span> Guests: {booking.guests}</span>
                 </div>
                 <p className="text-base">Total: ${booking.totalPrice}</p>
              </div>


            </div>
            {/*----Date and Timings----*/}
            <div className="flex flex-row  md:items-center gap-2 mt-4 md:gap-12 md:justify-center">
             <div>
                <p>Check-In:</p>
                <p className="font-medium text-gray-500">{new Date(booking.checkInDate).toDateString()}</p>
             </div>
             <div>
                <p>Check-Out:</p>
                <p className="font-medium text-gray-500">{new Date(booking.checkOutDate).toDateString()}</p>
             </div>

            </div>
            {/*-----Payment status------*/}
            <div className="flex flex-col items-start md:items-center mt-4 md:justify-center gap-2">
                <div className="flex flex-row items-center gap-2">
                 <div className={`h-3 w-3 rounded-full ${booking.isPaid ? 'bg-green-500' : 'bg-red-500'}`}></div>
                 <p className={`${booking.isPaid ? 'text-green-500' : 'text-red-500'}`}></p>
                    {booking.isPaid ? 'Paid' : 'Not Paid'}
                </div>
                <div>
                    {!booking.isPaid && <button className="bg-blue-500 text-white px-2 py-2 rounded">Pay Now</button>}
                </div>

            </div>
      </div>


        ))}




      </div>
    </div>
  )
}

export default MyBookings
