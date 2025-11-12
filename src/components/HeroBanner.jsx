import { div } from "framer-motion/client";
import { LucideBadgePlus } from "lucide-react";
import React from "react";
import { LuBadgePlus, LuBookOpenText } from "react-icons/lu";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { BookOpen, Search } from "lucide-react";

const HeroBanner = () => {
  return (
    <>
      <section className="relative  text-white overflow-hidden w-screen  ">
        {/* Overlay */}
        <div className="absolute inset-0"></div>

        <div className="relative container mx-auto flex flex-col items-center text-center justify-center px-6 py-20 md:py-28  ">
          {/* Text Section */}
          <motion.div
            className=" text-center md:text-left z-10 w-screen"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className=" w-full text-center flex justify-center items-center ">
              <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4 ">
                Explore the World of{" "}
                <div class="loader ">
                  <span class="loader-text">Knowladge</span>
                </div>{" "}
             
              </h1>
            </div>
          </motion.div>
          <motion.div
            className=" text-center md:text-left z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg md:text-xl text-gray-200 mb-6 text-center">
              Discover thousands of books, journals, and articles — all in one
              place.
            </p>
          </motion.div>
          <motion.div
            className=" text-center md:text-left z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
          >
            {/* Search Bar */}

            <div className="flex justify-center  items-center bg-white/20 rounded-full p-2 backdrop-blur-md w-full max-w-md mx-auto md:mx-0 ">
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

          <motion.div
            className=" text-center md:text-left z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            {/* hero button */}
            <div className="flex justify-center items-center mt-10 gap-2">
              <li className="btn-hero">
                <NavLink
                  className={"flex items-center gap-[2px]"}
                  to={"/all-books"}
                >
                  <LuBookOpenText className="h-4 w-4" />
                  All Books
                </NavLink>
              </li>
              <li className="btn-out">
                <NavLink
                  className={"flex items-center gap-[2px]"}
                  to={"/add-book"}
                >
                  <LucideBadgePlus className="h-4 w-4" />
                  Add Book
                </NavLink>
              </li>
            </div>
          </motion.div>

          {/* Image Section */}
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
