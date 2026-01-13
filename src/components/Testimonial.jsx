import React from 'react'
import { assets } from '../assets/assets'

const Testimonial = () => {
  return (
    <div>
      {/* Header */}
      <div className="my-20 mx-5 md:mx-20 text-center">
        <h1 className="text-3xl font-extrabold text-red-700">
          What Are Guests Saying
        </h1>
        <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
          Hear from our delighted guests who have experienced unforgettable stays
          at Koola Hotel. Their testimonials highlight our dedication to comfort,
          exceptional service, and memorable experiences for every visitor.
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap items-center justify-center gap-6 pt-14">

        {/* Card 1 */}
        <div className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white 
                        shadow-[0px_4px_15px_0px] shadow-black/5
                        transform transition-all duration-300 ease-in-out
                        hover:translate-y-[-8px] hover:shadow-xl">
          <div className="flex flex-col items-center px-5 py-4 relative">
            <img className="h-24 w-24 absolute -top-14 rounded-full" src={assets.testimonia1} alt="userImage1" />
            <div className="pt-8 text-center">
              <h1 className="text-lg font-medium text-gray-800">Agyei Michael Jnr</h1>
              <p className="text-gray-800/80">Frontend Developer</p>
            </div>
          </div>
          <p className="text-gray-500 px-6 text-center">
            "I always enjoy staying at Koola Hotel. The team’s attention to detail 
            and friendly service make every visit comfortable and memorable."
          </p>
          <div className="flex justify-center pt-4">
            <div className="flex gap-0.5">
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white 
                        shadow-[0px_4px_15px_0px] shadow-black/5
                        transform transition-all duration-300 ease-in-out
                        hover:translate-y-[-8px] hover:shadow-xl">
          <div className="flex flex-col items-center px-5 py-4 relative">
            <img className="h-24 w-24 absolute -top-14 rounded-full" src={assets.testimonia2} alt="userImage2" />
            <div className="pt-8 text-center">
              <h1 className="text-lg font-medium text-gray-800">Prudence Ackah-Nyanzu</h1>
              <p className="text-gray-800/80">Tiktok Influencer</p>
            </div>
          </div>
          <p className="text-gray-500 px-6 text-center">
            "Koola Hotel has been my go-to for the past three years. It always feels like home,
            offering comfort, convenience, and excellent hospitality every time I visit."
          </p>
          <div className="flex justify-center pt-4">
            <div className="flex gap-0.5">
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="text-sm w-80 border border-gray-200 pb-6 rounded-lg bg-white 
                        shadow-[0px_4px_15px_0px] shadow-black/5
                        transform transition-all duration-300 ease-in-out
                        hover:translate-y-[-8px] hover:shadow-xl">
          <div className="flex flex-col items-center px-5 py-4 relative">
            <img className="h-24 w-24 absolute -top-14 rounded-full" src={assets.testimonia3} alt="userImage3" />
            <div className="pt-8 text-center">
              <h1 className="text-lg font-medium text-gray-800">James Washington</h1>
              <p className="text-gray-800/80">Marketing Manager</p>
            </div>
          </div>
          <p className="text-gray-500 px-6 text-center">
            "Staying at Koola Hotel is always a great experience. From the friendly staff
            to the comfortable rooms, everything makes every visit truly enjoyable."
          </p>
          <div className="flex justify-center pt-4">
            <div className="flex gap-0.5">
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
              <img src={assets.starIconFilled} alt="star" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Testimonial
