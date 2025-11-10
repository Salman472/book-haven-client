import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const TopRating = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios('http://localhost:3002/top-rating')
      .then(data => {
        console.log(data.data);
        setBooks(data.data);
      });
  }, []);

  // Variants for smooth staggered animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const imgVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } },
    tap: { scale: 0.95 },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent"
      >
        Top Rating Books Collection
      </motion.h2>

      {/* Books Grid with staggered motion */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {books.map((book, index) => (
          <motion.div
            key={book?._id || index}
            variants={cardVariants}
            whileHover="hover"
            className="bg-transparent rounded-2xl p-4 shadow-lg border border-gray-700 transition duration-300"
          >
            <motion.img
              src={book?.coverImage}
              alt={book?.coverImage}
              className="w-full h-48 object-cover rounded-xl mb-4"
              variants={imgVariants}
            />
            <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text select-none tracking-tight">
              {book?.title}
            </h3>
            <div className="flex justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text select-none tracking-tight">
              <p className="mt-1">{book?.author}</p>
              <p className="mt-1">{book?.rating}</p>
            </div>
            <Link  to={`/book-details/${book?._id}`}>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="mt-3 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-xl font-medium hover:opacity-90 transition"
            >
              View Details
            </motion.button></Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TopRating;
