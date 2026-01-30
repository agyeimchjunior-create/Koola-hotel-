import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-[#0b1b34] text-slate-300 px-6 md:px-16 lg:px-24 xl:px-32 mt-10">
      
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-14 border-b border-white/10">
        
        {/* Brand */}
        <div>
          <img className="w-28 md:w-32" src={assets.logo} alt="Koola Hotel logo" />
          <p className="max-w-[420px] mt-6 text-sm leading-relaxed text-slate-400">
            Koola Hotel is dedicated to delivering exceptional comfort, personalized service,
            and memorable stays. From luxury rooms to exclusive offers, we make every visit
            feel effortless and rewarding.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-8">
          
          <div>
            <h3 className="font-semibold text-base text-white mb-4">
              Quick Links
            </h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition">Offers & Deals</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base text-white mb-4">
              Need Help?
            </h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Booking Information</a></li>
              <li><a href="#" className="hover:text-white transition">Cancellation Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Payment Methods</a></li>
              <li><a href="#" className="hover:text-white transition">Track Your Booking</a></li>
              <li><a href="#" className="hover:text-white transition">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base text-white mb-4">
              Follow Us
            </h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">YouTube</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <p className="py-6 text-center text-sm text-slate-400">
        © 2025 Koola Hotel. All rights reserved.
      </p>

    </footer>
  )
}

export default Footer
