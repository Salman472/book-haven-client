import React from 'react';

const Category = ({category}) => {
    return (
        <div
            key={category._id}
            className="cursor-pointer rounded-xl  hover:bg-purple-600 hover:text-white transition p-6 text-center font-semibold border-2"
          >
            {category.genre || 'genre'}
          </div>
    );
};

export default Category;