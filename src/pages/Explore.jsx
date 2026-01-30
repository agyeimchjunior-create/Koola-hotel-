import React from "react";
import { assets, exploreDummyData } from "../assets/assets";
import exploreBackground from "../assets/explore-bg.webp";
import { useNavigate } from "react-router-dom";

export const Explore = () => {
  const luxuryRoom = exploreDummyData[0]; // first object
  const singleBedRoom = exploreDummyData[1];
  const doubleBedRoom = exploreDummyData[2];
  const familySuites = exploreDummyData[3];
  const gymFacilities = exploreDummyData[4];
  const swimmingPools = exploreDummyData[5];
  const navigate = useNavigate();

  return (
    <div>
      {/* Background Hero Section */}
      <div
        className="relative w-full min-h-[70vh] md:min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${exploreBackground})` }}
      >
        <h1 className="text-2xl md:text-4xl lg:text-6xl mt-5 font-playfair leading-none text-center bg-white text-black text-extrabold px-4">
          Explore Comfort, Luxury & Local Experiences
        </h1>
      </div>

      {/* Luxury Rooms */}
      <div className="mt-10 flex flex-col items-center justify-center">
        <h2 className="text-center text-3xl font-semibold mb-5">
          Luxury Rooms & Premium Comfort
        </h2>

        <div
          key={luxuryRoom.id}
          className="rounded-lg p-2 m-5 hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white w-full md:w-auto"
        >
          <p className="text-lg font-semibold">{luxuryRoom.hotel}</p>
          {luxuryRoom.pricePerNight && (
            <span className="block text-sm text-gray-600">
              ${luxuryRoom.pricePerNight} / night
            </span>
          )}
          <span className="block text-sm text-gray-600">
            {luxuryRoom.address}
          </span>

          {/* Images Gallery */}
          <div className="flex flex-wrap gap-4 mt-4 items-center justify-center">
            {luxuryRoom.images.map((img, index) => (
              <img
                key={index}
                src={img} loading='lazy'
                alt={`${luxuryRoom.hotel} - ${index + 1}`}
                className="max-w-90 h-80 object-cover rounded-lg hover:-translate-y-2 transition-all duration-300"
              />
            ))}
          </div>
        </div>
    
      </div>
       {/*single room */}
        <div className="mt-10 flex flex-col items-center justify-center">
        <h2 className="text-center text-3xl font-semibold mb-5">
           Cozy Single Bed Rooms for Solo Travelers
        </h2>

        <div
          key={singleBedRoom.id}
          className="rounded-lg p-2 m-5 hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white w-full md:w-auto"
        >
          <p className="text-lg font-semibold">{singleBedRoom.hotel}</p>
          {singleBedRoom.pricePerNight && (
            <span className="block text-sm text-gray-600">
              ${singleBedRoom.pricePerNight} / night
            </span>
          )}
          <span className="block text-sm text-gray-600">
            {singleBedRoom.address}
          </span>

          {/* Images Gallery */}
          <div className="flex flex-wrap gap-4 mt-4 items-center justify-center">
            {singleBedRoom.images.map((img, index) => (
              <img
                key={index}
                src={img} loading='lazy'
                alt={`${singleBedRoom.hotel} - ${index + 1}`}
                className="max-w-90 h-80 object-cover rounded-lg hover:-translate-y-2 transition-all duration-300"
              />
            ))}
          </div>
        </div>
    
      </div>
         {/*double bed room */}
         <div className="mt-10 flex flex-col items-center justify-center">
        <h2 className="text-center text-3xl font-semibold mb-5">
           Spacious Double Bed Rooms for Ultimate Comfort
        </h2>

        <div
          key={doubleBedRoom.id}
          className="rounded-lg p-2 m-5 hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white w-full md:w-auto"
        >
          <p className="text-lg font-semibold">{doubleBedRoom.hotel}</p>
          {doubleBedRoom.pricePerNight && (
            <span className="block text-sm text-gray-600">
              ${doubleBedRoom.pricePerNight} / night
            </span>
          )}
          <span className="block text-sm text-gray-600">
            {doubleBedRoom.address}
          </span>

          {/* Images Gallery */}
          <div className="flex flex-wrap gap-4 mt-4 items-center justify-center">
            {doubleBedRoom.images.map((img, index) => (
              <img
                key={index}
                src={img} loading='lazy'
                alt={`${doubleBedRoom.hotel} - ${index + 1}`}
                className="max-w-90 h-80 object-cover rounded-lg hover:-translate-y-2 transition-all duration-300"
              />
            ))}
          </div>
        </div>
    
      </div>
         {/*family suites */}
          <div className="mt-10 flex flex-col items-center justify-center">
        <h2 className="text-center text-3xl font-semibold mb-5">
           Spacious Family Suites for Comfort & Togetherness
        </h2>

        <div
          key={familySuites.id}
          className="rounded-lg p-2 m-5 hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white w-full md:w-auto"
        >
          <p className="text-lg font-semibold">{familySuites.hotel}</p>
          {familySuites.pricePerNight && (
            <span className="block text-sm text-gray-600">
              ${familySuites.pricePerNight} / night
            </span>
          )}
          <span className="block text-sm text-gray-600">
            {familySuites.address}
          </span>

          {/* Images Gallery */}
          <div className="flex flex-wrap gap-4 mt-4 items-center justify-center">
            {familySuites.images.map((img, index) => (
              <img
                key={index}
                src={img} loading='lazy'
                alt={`${familySuites.hotel} - ${index + 1}`}
                className="max-w-90 h-80 object-cover rounded-lg hover:-translate-y-2 transition-all duration-300"
              />
            ))}
          </div>
        </div>
    
      </div>
      {/*gym */}
      <div className="mt-10 flex flex-col items-center justify-center">
        <h2 className="text-center text-3xl font-semibold mb-5">
          State-of-the-Art Gym Facilities
        </h2>

        <div
          key={gymFacilities.id}
          className="rounded-lg p-2 m-5 hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white w-full md:w-auto"
        >
          <p className="text-lg font-semibold">{gymFacilities.hotel}</p>
          {gymFacilities.price && (
            <span className="block text-sm text-gray-600">
              ${gymFacilities.price} / day
            </span>
          )}
          
          {/* Images Gallery */}
          <div className="flex flex-wrap gap-4 mt-4 items-center justify-center">
            {gymFacilities.images.map((img, index) => (
              <img
                key={index}
                src={img} loading='lazy'
                alt={`${gymFacilities.hotel} - ${index + 1}`}
                className="max-w-90 h-80 object-cover rounded-lg hover:-translate-y-2 transition-all duration-300"
              />
            ))}
          </div>
        </div>

      </div>
      {/*swimming pool */}
      <div className="mt-10 flex flex-col items-center justify-center">
        <h2 className="text-center text-3xl font-semibold mb-5">
          Relaxing Swimming Pools for Leisure & Refreshment
        </h2>

        <div
          key={swimmingPools.id}
          className="rounded-lg p-2 m-5 hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white w-full md:w-auto"
        >
          <p className="text-lg font-semibold">{swimmingPools.hotel}</p>
          {swimmingPools.price && (
            <span className="block text-sm text-gray-600">
              ${swimmingPools.price} / day
            </span>
          )}
          
          {/* Images Gallery */}
          <div className="flex flex-wrap gap-4 mt-4 items-center justify-center">
            {swimmingPools.images.map((img, index) => (
              <img
                key={index}
                src={img} loading='lazy'
                alt={`${swimmingPools.hotel} - ${index + 1}`}
                className="max-w-90 h-80 object-cover rounded-lg hover:-translate-y-2 transition-all duration-300"
              />
            ))}
          </div>
        </div>

      </div>
      <button onClick={()=>navigate('/rooms')} className='px-4 py-2 mb-10 bg-red-700 text-white rounded hover:bg-red-500 transition duration-300 mx-auto block cursor-pointer'>
      Book Now</button>


      
    </div>
  );
};

export default Explore;
