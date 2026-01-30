import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

import aboutHero from "../assets/heroImage.png";
import g1 from "../assets/luxuryImg1.webp";
import g2 from "../assets/poolImg3.webp";
import g3 from "../assets/gymImg2 (2).webp";
import g4 from "../assets/explore-bg.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

 const About = () => {
  const navigate = useNavigate();

  const gallery = [g1, g2, g3, g4];

  return (
    <div className="w-full overflow-hidden">

      {/* HERO */}
      <div
        className="w-full min-h-[70vh] md:min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 px-8 py-6 rounded-xl text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold">
            About Our Hotel
          </h1>
          <p className="mt-2 text-gray-700">
            Comfort. Luxury. Experience.
          </p>
        </motion.div>
      </div>

      {/* INTRO */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center py-16 px-6"
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          Our hotel blends premium design with modern hospitality,
          offering world-class comfort and unforgettable stays.
        </p>
      </motion.div>

      {/* WHY US */}
      <div className="bg-gray-50 py-16">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-3xl font-semibold text-center mb-12"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid gap-8 px-6 max-w-6xl mx-auto sm:grid-cols-2 md:grid-cols-4">
          {[
            "Premium Rooms",
            "Luxury Amenities",
            "Prime Locations",
            "Exceptional Service"
          ].map((title, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-600">
                Designed for comfort, elegance, and convenience.
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* IMAGE SLIDER */}
      <div className="py-16 px-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-3xl font-semibold text-center mb-10"
        >
          Experience Our Spaces
        </motion.h2>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory max-w-6xl mx-auto">
          {gallery.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              loading="lazy"
              alt={`hotel view ${i + 1}`}
              className="min-w-[280px] md:min-w-[350px] h-64 object-cover rounded-xl snap-center hover:-translate-y-2 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
            />
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="bg-gray-900 text-white py-16 text-center px-6">
        <div className="flex flex-wrap justify-center gap-12">
          {[
            { num: "5+", label: "Years of Excellence" },
            { num: "10k+", label: "Happy Guests" },
            { num: "100%", label: "Comfort Focused" }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-4xl font-bold">{item.num}</p>
              <p className="text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="py-16 text-center"
      >
        <h2 className="text-3xl font-semibold mb-6">
          Ready to Book Your Stay?
        </h2>
        <button
          onClick={() => navigate("/rooms")}
          className="bg-red-600 text-white px-10 py-3 rounded-lg hover:bg-red-500 transition"
        >
          Explore Rooms
        </button>
      </motion.div>

    </div>
  );
};

export default About;
