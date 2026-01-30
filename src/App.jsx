import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Hero from './assets/hero-video.mp4'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import HotelReg from './components/HotelReg'
import Layout from './pages/hotelOwner/Layout'
import Dashboard from './pages/hotelOwner/Dashboard'
import AddRoom from './pages/hotelOwner/AddRoom'
import ListRoom from './pages/hotelOwner/ListRoom'
import Explore from './pages/Explore'
import About from './pages/About'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerPath && <Navbar />}
     {false && <HotelReg />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<Explore />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/rooms' element={<AllRooms />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path='/my-bookings' element={<MyBookings />} />
          <Route path='/owner' element={<Layout />}>
            {/* Nested routes for hotel owner can be added here */}
            <Route index element={<Dashboard />} />
            <Route path='add-room' element={<AddRoom />} />
            <Route path='list-room' element={<ListRoom/>} /> 
          
          </Route>
        </Routes>
        </div>
        {!isOwnerPath && <Footer />}
      
    </div>
  )
}

export default App
