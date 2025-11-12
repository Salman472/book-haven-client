import { NotebookPenIcon } from "lucide-react";
import React, { use } from "react";
import { AuthContext } from "../constext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateBook = ({ singleBook, hendleOpenModal }) => {
  // console.log(singleBook);
  const { user } = use(AuthContext);

  // update form
  const handleUpdate = (e) => {
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
    // console.log(author, genre, rating, summary, coverImage);
    // if(!author && !genre && !rating && summary && coverImage){
    //   return alert('data not found')
    // }
    const updateBook = {
      title,
      author,
      genre,
      rating,
      summary,
      coverImage,
      userEmail: user.email,
    };
    // console.log(updateBook);

    axios
      .patch(
        `https://book-haven-server-bay.vercel.app/my-books/${singleBook?._id}`,
        updateBook
      )
      .then((data) => {
        // console.log(data.data);
        if (data.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-transparent text-white rounded-2xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        📚 Update Your Book
      </h2>

      <form onSubmit={handleUpdate} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={user.displayName}
            readOnly
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={user.email}
            readOnly
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Book Title</label>
          <input
            type="text"
            defaultValue={singleBook?.title}
            // value={singleBook?.title}
            name="title"
            placeholder="Enter book title"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-medium mb-1">Author</label>
          <input
            type="text"
            name="author"
            defaultValue={singleBook?.author}
            placeholder="Enter author name"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        {/* Genre */}
        <div>
          <label className="block text-sm font-medium mb-1">Genre</label>
          <input
            type="text"
            name="genre"
            defaultValue={singleBook?.genre}
            placeholder="Enter genre name"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium mb-1">Rating</label>
          <input
            type="text"
            name="rating"
            defaultValue={singleBook?.rating}
            // value={singleBook.rating}
            placeholder="Rate 1-5"
            min="1"
            max="5"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        {/* Summary */}
        <div>
          <label className="block text-sm font-medium mb-1">Summary</label>
          <textarea
            name="summary"
            defaultValue={singleBook?.summary}
            rows="4"
            placeholder="Write a short summary..."
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        {/* Cover Image */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Cover Image URL
          </label>
          <input
            type="text"
            name="coverImage"
            defaultValue={singleBook?.coverImage}
            placeholder="https://example.com/cover.jpg"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        {/* Submit Button */}

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-xl font-medium hover:opacity-90 transition"
        >
          Update Book
        </button>

        <div className="modal-action ">
          <div method="dialog ">
            {/* if there is a button in form, it will close the modal */}

            <button className="btn w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-xl font-medium hover:opacity-90 transition">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;
