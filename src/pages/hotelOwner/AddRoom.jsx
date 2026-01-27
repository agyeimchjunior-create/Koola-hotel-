import React, { useState } from 'react'
import uploadArea from '../../assets/uploadArea.svg'


const ListRoom = () => {

  const [images, setImages] = useState([null, null, null, null])
  const amenitiesOptions = [
    "Free Wi-Fi",
    "Mountain View", 
    "Room Service",
    "Swimming Pool",
    "Fitness Center"
  ]

  const [roomType, setRoomType] = useState("")
  const [pricePerNight, setPricePerNight] = useState(0)
  const [amenities, setAmenities] = useState([])

  const handleImageChange = (index, file) => {
    const updated = [...images]
    updated[index] = file
    setImages(updated)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!roomType) {
      alert("Please select a room type")
      return
    }

    if (pricePerNight <= 0) {
      alert("Enter a valid price")
      return
    }

    console.log({ images, roomType, pricePerNight })
  }

  return (
    <div className="p-6">

      <h1 className="text-4xl font-outfit mt-5">Add Room</h1>

      <p className="text-sm text-gray-500 mt-3">
        Fill in the details carefully and accurate room details,
        pricing, and amenities, to enhance the user booking experience
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-8">

        {/* Images */}
        <div>
          <p className="text-gray-800 mb-3">Images</p>

          <div className="grid grid-cols-2 sm:flex gap-4 flex-wrap">
            {images.map((img, index) => (
              <label key={index} className="cursor-pointer">

                <img
                  src={img ? URL.createObjectURL(img) : uploadArea}
                  className="w-32 h-24 object-cover opacity-80 rounded-md"
                  alt="Upload"
                />

                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={(e) =>
                    handleImageChange(index, e.target.files[0])
                  }
                />
              </label>
            ))}
          </div>
        </div>

        {/* Room type + price */}
        <div className="flex flex-col sm:flex-row gap-6 items-end">

          <div className="flex-1">
            <label className="block mb-2 text-gray-700">
              Room Type
            </label>

            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full border rounded-lg p-3"
            >
              <option value="" disabled hidden>
                Select your room
              </option>
              <option value="single">Single Room</option>
              <option value="double">Double Room</option>
              <option value="suite">Family Suite</option>
              <option value="luxury">Luxury Suite</option>
            </select>
          </div>

          <div className="w-40">
            <label className="block mb-2 text-gray-700">
              Price Per Night
            </label>

            <input
              type="number"
              min="0"
              value={pricePerNight}
              onChange={(e) => setPricePerNight(Number(e.target.value))}
              className="w-full border rounded-lg p-3"
            />
          </div>

        </div>
        <div>
          <label htmlFor="amenities" className='flex  mb-2'>
            Amenities</label>
            <div className="flex flex-col gap-2  text-gray-700">
              {amenitiesOptions.map((amenity) => (
                <label key={amenity} className="flex items-center  text-gray-700">
                  <input
                    type="checkbox"
                    checked={amenities.includes(amenity)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setAmenities([...amenities, amenity])
                      } else {
                        setAmenities(amenities.filter(a => a !== amenity))
                      }
                    }}
                    className="mr-2"
                  />
                  {amenity}
                </label>
              ))}
            </div>
        </div>
         <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Add Room
        </button>
       

      </form>
    </div>
  )
}

export default ListRoom
