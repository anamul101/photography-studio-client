import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Featured from './Featured';
import HomePageService from './HomePageService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomePageService></HomePageService>
            <AboutUs></AboutUs>
            <Featured></Featured>
        </div>
    );
};

export default Home;