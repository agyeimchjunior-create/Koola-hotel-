import React, { useState } from 'react'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(dashboardDummyData)

  return (
    <div className="p-5">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-5 text-gray-500">
          Monitor your room listings, track bookings, and analyze revenue all in one place. Stay updated with real-time insights to ensure smooth operations.
        </p>
      </div>

      {/* Total Bookings & Revenue */}
      <div className="flex flex-col sm:flex-row gap-4 my-8">
        <div className="flex flex-col bg-white shadow-md border-primary/10 rounded p-6 flex-1">
          <img src={assets.totalBookingIcon} alt="" className="max-sm:hidden h-10 w-10" />
          <p className="text-blue-500 text-lg">Total Bookings</p>
          <p className="text-neutral-400 text-base">{dashboardData.totalBookings}</p>
        </div>

        <div className="flex flex-col bg-white shadow-md border-primary/10 rounded p-6 flex-1">
          <img src={assets.totalRevenueIcon} alt="" className="max-sm:hidden h-10 w-10" />
          <p className="text-blue-500 text-lg">Total Revenue</p>
          <p className="text-neutral-400 text-base">${dashboardData.totalRevenue}</p>
        </div>
      </div>

      {/* Recent Bookings */}
      <h2 className="text-xl font-semibold mt-8">Recent Bookings</h2>
      <div className="mt-4 w-full max-w-3xl overflow-x-auto border border-gray-300 rounded-lg">
        <table className="w-full text-left table-auto">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="p-4 font-medium text-gray-600">Guest Name</th>
              <th className="p-4 font-medium text-gray-600 max-sm:hidden">Hotel Name</th>
              <th className="p-4 font-medium text-gray-600">Room Type</th>
              <th className="p-4 font-medium text-gray-600 text-center">Total Amount</th>
              <th className="p-4 font-medium text-gray-600 text-center">Payment Status</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {dashboardData.bookings.map((booking, index) => (
              <tr key={index} className="border-b border-gray-300 hover:bg-gray-50">
                <td className="p-4">{booking.user.username}</td>
                <td className="p-4 max-sm:hidden">{booking.hotel.name}</td>
                <td className="p-4">{booking.room.roomType}</td>
                <td className="p-4 text-center">${booking.totalPrice}</td>
                <td className="p-4 text-center">
                  <button
                    className={`inline-block px-3 py-1 rounded-full text-white text-xs ${
                      booking.isPaid ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {booking.isPaid ? 'Completed' : 'Pending'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
