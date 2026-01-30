import React from 'react'
import exlusiveOne from'../assets/exclusiveOfferCardImg1.png'
import exlusiveTwo from'../assets/exclusiveOfferCardImg2.png'
import exlusiveThree from'../assets/exclusiveOfferCardImg3.png'
import { assets } from'../assets/assets'
import { useNavigate } from 'react-router-dom'


const Exclusive = () => {
  const navigate = useNavigate()

  return (
    <div>
        
      <div className="flex flex-row flex-wrap items-center justify-between px-5">
  <h1 className="text-3xl font-semibold text-red-700 mr-3">Exclusive Offers</h1>

  <button className="flex items-center gap-2 bg-white rounded-2xl text-black border-2 px-2 py-1 text-sm mt-2 sm:px-3 sm:py-2 sm:text-base sm:mt-0">
    View All Offers
    <img 
      src={assets.arrowIcon} 
      alt="arrow" 
      className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" 
    />
  </button>
</div>


<p className="text-sm text-slate-500 ml-4 mt-2 max-w-lg px-4">
  Take advantage of our limited-time exclusive offers and special deals on select hotels. Enjoy premium amenities, discounted rates, and unique experiences designed to make your stay unforgettable.
</p>


<div className="flex flex-col md:flex-row items-center gap-6 h-auto md:h-[400px] w-full max-w-5xl mt-10 mx-auto px-4">


 <div className="relative group grow transition-all w-full h-[260px] md:w-56 md:h-[400px] duration-500 md:hover:w-full">

        <img  onClick={() => navigate('/rooms')} className="h-full w-full object-cover object-center" src={exlusiveOne} alt="image"></img>

      <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 text-white bg-black/50 
opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">


            <h1 className="text-3xl mb-6">Luxury Retreat</h1>
            <p className="text-sm mb-8">Book 60 days in advance and save on your stay at any of our luxury properties worldwide</p>
            <button className="absolute top-3 right-3 bg-red-700 text-white rounded-full px-2 py-2">20% OFF</button>
            <span className="absolute bottom-3 right-3 text-white"> Expires 23rd January 2026 </span>
              <button onClick={() => navigate('/rooms')} className=" w-[120px] text-[10px] absolute bottom-2 left-5 mt-2 flex items-center px-1 py-1 gap-2 bg-white rounded-2xl text-black mr-3 px-3 py-2 mt-4 sm:mt-0 cursor-pointer" >
             View All Offers
             <img src={assets.arrowIcon} alt="arrow" className="transition-transform group-hover:translate-x-1" />
             </button>


        </div>
    </div>
    <div className="relative group grow transition-all w-full h-[260px] md:w-56 md:h-[400px]
 duration-500 hover:w-full">
        <img  onClick={() => navigate('/rooms')} className="h-full w-full object-cover object-right" src={exlusiveTwo} alt="image"></img>
        <div
            className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 
opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">

            <h1 className="text-3xl mb-6">Romantic Getaway</h1>
            <p className="text-sm mb-8">Special couples package including spa treatment</p>
             <button className="absolute top-3 right-3 bg-red-700 text-white rounded-full px-2 py-2">15% OFF</button>
             <span className="absolute bottom-3 right-3 text-white"> Expires 1st June 2026 </span>
              <button onClick={() => navigate('/rooms')} className=" w-[120px] text-[10px] absolute bottom-2 left-5 mt-2 flex items-center px-1 py-1 gap-2 bg-white rounded-2xl text-black mr-3 px-3 py-2 mt-4 sm:mt-0 cursor-pointer">
             View All Offers
             <img src={assets.arrowIcon} alt="arrow" className="transition-transform group-hover:translate-x-1" />
             </button>



        </div>
    </div>
    <div className="relative group grow transition-all w-full h-[260px] md:w-56 md:h-[400px]
         duration-500 hover:w-full">
        <img  onClick={() => navigate('/rooms')} className="h-full w-full object-cover object-center cursor-pointer " src={exlusiveThree} alt="image"></img>

           <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 
          opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">

            <h1 className="text-3xl mb-6">Summer Escape Package</h1>
            <p className="text-sm mb-8">Enjoy a complimentary night and daily breakfast .</p>
             <button className="absolute top-3 right-3 bg-red-700 text-white rounded-full px-2 py-2">30% OFF</button>
             <span className="absolute bottom-3 right-3 text-white"> Expires 31st Febuary 2026 </span>
             <button onClick={() => navigate('/rooms')} className=" w-[120px] text-[10px] absolute bottom-2 left-5 mt-2 flex items-center px-1 py-1 gap-2 bg-white rounded-2xl text-black mr-3 px-3 py-2 mt-4 sm:mt-0 cursor-pointer">
             View All Offers
             <img src={assets.arrowIcon} alt="arrow" className="transition-transform group-hover:translate-x-1" />
             </button>



            </div>

        </div>
    </div>
</div>

)
}

export default Exclusive
