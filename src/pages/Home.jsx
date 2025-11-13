import React from 'react';
import Hero from '../components/Hero';
import LatestBooks from '../components/LatestBooks';
import TopRating from '../components/TopRating';
import AboutSection from '../components/AboutProject';
import { Toaster } from 'react-hot-toast';
import Contributors from '../components/Contributors';
import WelcomeSection from '../components/WellCome';


const Home = () => {
    return (
        <div>
           
            <Hero/>
            <WelcomeSection/>
            <LatestBooks/>
            <TopRating/>
            <Contributors/>
            <AboutSection/>
            
        </div>
    );
};

export default Home;