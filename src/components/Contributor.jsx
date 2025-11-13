import React from 'react';

const Contributor = ({contributor}) => {
    console.log(contributor);
    return (
        <div className='flex justify-center items-center'>
           <img className='border border-red-600' src={contributor.photoURL} alt="" />
        </div>
    );
};

export default Contributor;