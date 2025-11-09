import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className=' max-w-[1536px] mx-auto '>
    <div className=''>
      <Navbar/> 
    </div>
     
     <Outlet/>
     <Footer/>
    </div>
  );
};

export default MainLayout;
