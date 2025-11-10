import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Search } from "lucide-react";

const Heroba = () => {
  return (
    <section className="relative mt-10 text-white overflow-hidden w-screen flex justify-center ">
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      <div className="relative container mx-auto flex flex-col md:flex-row items-center text-center justify-center px-6 py-20 md:py-28 w-full ">
        {/* Text Section */}
        <motion.div
          className="max-w-xl text-center md:text-left z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Explore the World of Knowledge 📚
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 text-center">
            Discover thousands of books, journals, and articles — all in one place.
          </p>

          {/* Search Bar */}
          <div className="flex  items-center bg-white/20 rounded-full p-2 backdrop-blur-md w-full max-w-md mx-auto md:mx-0 ">
            <Search className="text-white ml-3" />
            <input
              type="text"
              placeholder="Search for books, authors..."
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-300 px-3 "
            />
            <button className="bg-white text-purple-600 font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition">
              Search
            </button>
          </div>
        </motion.div>

        {/* Image Section */}
      
      </div>
    </section>
  );
};

export default Heroba;
