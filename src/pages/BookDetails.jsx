import { useNavigate, useLoaderData } from "react-router";
import { motion } from "framer-motion";

import Comment from "../components/Comment";
import { use } from "react";
import { AuthContext } from "../constext/AuthContext";

const BookDetails = () => {
  const {loading}=use(AuthContext)
  const navigate = useNavigate();
  const book = useLoaderData();
  console.log(book);
  
  if (!book) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Book not found.
      </div>
    );
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-dots loading-xl text-error"></span>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 mt-18">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-white bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 rounded-lg hover:opacity-90 transition"
        >
          ← Back to Collection
        </button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row gap-6"
        >
          {/* Book Cover */}
          <motion.img
            src={book?.coverImage}
            alt={book?.title}
            className="w-full md:w-64 h-80 object-cover rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          {/* Book Info */}
          <div className="flex-1 text-white">
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
              {book?.title}
            </h1>
            <p className="text-gray-400 mb-4">by {book?.author}</p>

            <div className="flex gap-4 mb-4">
              <span className="bg-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
                {book?.genre}
              </span>
              <span className="bg-yellow-500 px-3 py-1 rounded-full text-sm font-medium">
                ⭐ {book?.rating}
              </span>
            </div>

            <p className="text-gray-300 mb-6">{book?.summary}</p>

            <p className="text-gray-400 mb-4">
              Contributed by:{" "}
              <span className="text-white">{book?.userEmail}</span>
            </p>

            {/* Actions */}
            <div className="flex gap-4 mt-4 flex-wrap">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition">
                Add to Favorites
              </button>
              <button className="bg-gradient-to-r from-pink-500 to-red-500 px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition">
                Share
              </button>
            </div>
          </div>
        </motion.div>

        {/* Comment Section */}
        <Comment />
      </div>
    </>
  );
};

export default BookDetails;
