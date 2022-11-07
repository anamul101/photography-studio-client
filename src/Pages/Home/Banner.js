import React from 'react';
import banner from '../../Assets/banner.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.instituteofphotography.in/wp-content/uploads/2016/10/instituteofphotography-testimonial-banner.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                <h1 className="mb-5 text-5xl font-bold">WELCOME TO MY PHOTOGRAPHY</h1>
                <p className="mb-5">Welcome to the Photography Studio, a place to get the best professional  photography in Bangladesh. Contrary to what most people believe, photography is a delicate art that combines your creative skills and technical expertise to make pictures come alive.</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;