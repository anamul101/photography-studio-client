import React from 'react';


const AboutUs = () => {
    return (
       <>
         <h1 className='text-5xl text-center text-orange-600 mt-12'>About Us</h1>
        <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="max-w-sm rounded-lg shadow-2xl" alt='about img'/>
            <div>
            <h1 className="text-4xl text-left mb-4 text-orange-600">Rangefinder Magazine Rising Star</h1>
            <p className="py-6">My approach to photographing weddings and elopements is essentially driven by a need to capture important, thoughtful, and emotive instances in an interesting and artistic way. A deep breath as the ceremony begins. The nervous holding of hands. Tears during the speeches. Drunken singing – your mum’s terrible dancing – all of it. It’s about documenting these scenes in-between with feeling and empathy. <br />
                        I’ll be there, capturing you just as you are, with no awkward posing and no annoying requests for more shots. Just the two of you alongside your closest friends and family. Photographed in an easy-going and unobtrusive manner.</p>
            </div>
        </div>
        </div>
       </>
    );
};

export default AboutUs;