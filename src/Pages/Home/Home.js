import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import HomePageService from './HomePageService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomePageService></HomePageService>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;