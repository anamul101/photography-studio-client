import React from 'react';


const AboutUs = () => {
    return (
       <>
         <h1 className='text-5xl text-center text-orange-600 mt-12'>About Us</h1>
        <div className="hero h-96">
            <div className="hero-content flex-col lg:flex-row">
                
                <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
       </>
    );
};

export default AboutUs;