import React, { use } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../constext/AuthContext";

const AddBook = () => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);
  const hendleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const rating = Number(form.rating.value);
    if (rating > 5) {
      return;
    }
    const summary = form.summary.value;
    const coverImage = form.coverImage.value;
    console.log(title, author, genre, rating, summary, coverImage);
    const newBook = {
      title,
      author,
      genre,
      rating,
      summary,
      coverImage,
      email: user.email,
      name: user.displayName,
      photoURL:user.photoURL
    };
    axios
      .post("https://book-haven-server-bay.vercel.app/add-book", newBook)
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
          e.target.reset();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen mt-15 py-10  px-2">
      <motion.form
        onSubmit={hendleAddBook}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-2xl  border-white/20 rounded-2xl p-8 w-full max-w-md shadow-2xl"
      >
        <h2 className="text-3xl font-semibold text-center mb-6">
          📚 Add a New Book
        </h2>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm  mb-2">Title</label>
          <input
            type="text"
            name="title"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30   focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Enter book title"
          />
        </div>

        {/* Author */}
        <div className="mb-4">
          <label className="block text-sm  mb-2">Author</label>
          <input
            type="text"
            name="author"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 
           focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter author name"
          />
        </div>

        {/* Genre */}
        <div className="mb-4">
          <label className="block text-sm  mb-2">Genre</label>
          <input
            type="text"
            name="genre"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30  focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter genre"
          />
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label className="block text-sm  mb-2">
            Rating (1–5)
          </label>
          <input
            type="number"
            name="rating"
            required
            step="0.1"
            min="0"
            max="5"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 
             focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter rating"
          />
        </div>

        {/* Summary */}
        <div className="mb-4">
          <label className="block text-sm 
           mb-2">Summary</label>
          <textarea
            name="summary"
            required
            rows="3"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 
             focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Write a short summary..."
          ></textarea>
        </div>

        {/* Cover Image URL */}
        <div className="mb-4">
          <label className="block text-sm 
           mb-2">
            Cover Image URL
          </label>
          <input
            type="text"
            name="coverImage"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30  focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Paste image URL"
          />
        </div>

        {/* Hidden user fields */}
        <input type="hidden" name="userEmail" />
        <input type="hidden" name="userName" />

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-xl font-medium hover:opacity-90 transition"
        >
          Add Book
        </motion.button>
      </motion.form>
    </div>
  );
};

export default AddBook;
