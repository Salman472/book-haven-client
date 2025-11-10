import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [originalBooks, setOriginalBooks] = useState([]);
  const [sortOption, setSortOption] = useState("normal"); // normal, asc, desc
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3002/all-books")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setBooks(res.data);
          setOriginalBooks(res.data);
        }
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  // Handle sorting
  const handleSort = (option) => {
    setSortOption(option);
    setDropdownOpen(false);

    let sorted = [...books];
    if (option === "asc") {
      sorted.sort((a, b) => (parseFloat(a.rating) || 0) - (parseFloat(b.rating) || 0));
    } else if (option === "desc") {
      sorted.sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0));
    } else {
      sorted = [...originalBooks]; // normal order
    }

    setBooks(sorted);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-14">
      {/* Title */}
      
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent"
      >
        Book Collection
      </motion.h2>

      {/* Dropdown Sort Button */}
      <div className="flex justify-end mb-4 relative">
        <motion.button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-6 rounded-lg font-medium hover:opacity-90 transition"
        >
          {sortOption === "asc"
            ? "Sort: Rating ↑"
            : sortOption === "desc"
            ? "Sort: Rating ↓"
            : "Sort: Normal"}
        </motion.button>

        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg w-48 z-10"
          >
           
            <ul>
              <li
                onClick={() => handleSort("normal")}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-t-lg"
              >
                🟢 Normal
              </li>
              <li
                onClick={() => handleSort("asc")}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                🔼 Rating Ascending
              </li>
              <li
                onClick={() => handleSort("desc")}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded-b-lg"
              >
                🔽 Rating Descending
              </li>
            </ul>
          </motion.div>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-white border border-gray-700 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-left">
              <th className="px-4 py-3">Cover</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Author</th>
              <th className="px-4 py-3">Genre</th>
              <th className="px-4 py-3">Rating</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {books.length > 0 ? (
              books.map((book, index) => (
                <motion.tr
                  key={book._id || index}
                  initial={{ opacity: 0, x: "-100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  className="border-b border-gray-700 hover:bg-gray-800 transition"
                >
                  <td className="px-4 py-3">
                    <motion.img
                      src={book?.coverImage}
                      alt={book?.title}
                      className="w-16 h-20 object-cover rounded-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </td>
                  <td className="px-4 py-3 font-semibold">{book?.title}</td>
                  <td className="px-4 py-3">{book?.author}</td>
                  <td className="px-4 py-3">{book?.genre}</td>
                  <td className="px-4 py-3">{book?.rating}</td>
                  <td className="px-4 py-3">
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 0px 10px rgba(147, 51, 234, 0.6)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 py-1 px-4 rounded-lg font-medium hover:opacity-90 transition"
                    >
                      View Details
                    </motion.button>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-gray-400 font-medium"
                >
                  Loading books...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBooks;
