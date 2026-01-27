import React, { useState } from 'react'
import { roomsDummyData } from '../../assets/assets'

const ListRoom = () => {

   const [rooms, setRooms] = useState(roomsDummyData)

  return (
   
    <div>
      <div>
        <h1 className='mt-5 text-4xl text-left text-outfit'>Room Listings</h1>
        <p className='text-sm text-gray-500 mt-5 text-left'>View, edit, or manage all listed rooms. Keep the information up-to-date 
          to provide the best experience for users.
        </p>
      </div>
      <p className='mt-5'>All Rooms</p>
      <div className="mt-4 w-full max-w-3xl overflow-x-auto border border-gray-300 rounded-lg ">
         <table className="w-full text-left table-auto">
           <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="p-4 font-medium text-gray-600">Name</th>
              <th className="p-4 font-medium text-gray-600 max-sm:hidden">Facility</th>
              <th className="p-4 font-medium text-gray-600">Price / night</th>
              <th className="p-4 font-medium text-gray-600 text-center">Actions</th>
              <th className="p-4 font-medium text-gray-600 text-center">Payment Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rooms.map((room, index) => (
              <tr key={index} className="border-b border-gray-300 hover:bg-gray-50">  
                <td className="p-4">{room.name}</td>
                <td className="p-4 max-sm:hidden">{room.facility}</td>
                <td className="p-4">{room.price}</td>
                <td className="p-4 text-center">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</button>
                </td>
                <td className="p-4 text-center">
                  {room.paymentStatus === "Paid" ? (
                    <span className="text-green-500 font-medium">Paid</span>
                  ) : (
                    <span className="text-red-500 font-medium">Pending</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>





       </div>

    </div>
  )
}

export default ListRoom
