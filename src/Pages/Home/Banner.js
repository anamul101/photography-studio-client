import React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.instituteofphotography.in/wp-content/uploads/2016/10/instituteofphotography-testimonial-banner.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                <h1 className="mb-5 text-5xl font-bold">WELCOME TO MODERN <br /> WEDDING PHOTOGRAPHY</h1>
                <p className="mb-5">Stylish, contemporary wedding photography of the most amazing couples <br /> at some of the very best venues & elopement locations throughout the UK & beyond</p>
                <Link to='/services'>
                    <button className="btn btn-outline btn-warning">MY SERVICES</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;