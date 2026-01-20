import React from "react";

const Contributor = ({ contributor }) => {
  if (!contributor?.photoURL) return null;

  return (
    
      <div className="">
        <img
          src={contributor.photoURL}
          alt={contributor.name || "Contributor"}
          className="min-h-24 min-w-24 max-h-32 max-w-32 rounded-full object-cover border-2 border-gray-100"
        />
    
    </div>
  );
};

export default Contributor;
