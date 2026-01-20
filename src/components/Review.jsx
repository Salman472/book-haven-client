import React, { useState } from "react";

const Review = ({ review }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300
                 flex flex-col w-[400px] h-[200px]"
    >
      {/* User Info */}
      <div className="flex items-center gap-4 mb-3">
        <img
          src={review?.userPhoto}
          alt={review?.name}
          className="w-12 h-12 rounded-full object-cover border"
        />

        <div>
          <h4 className="font-semibold text-base min-w-[400px]">{review?.name}</h4>
          <div className="text-yellow-500 text-sm">
            {"★".repeat(review?.rating || 5)}
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p
        className={`text-gray-600 leading-relaxed text-sm ${
          expanded ? "" : "line-clamp-3"
        }`}
      >
        {review?.text}
      </p>

      {/* Read More */}
      {review?.text?.length > 10 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-auto text-purple-600 text-sm font-medium hover:underline self-start"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}

      {/* Footer */}
      <div className="mt-2 text-xs text-gray-400">
        Verified Reader
      </div>
    </div>
  );
};

export default Review;
