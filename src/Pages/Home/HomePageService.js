import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleService from '../Services/SingleService';

const HomePageService = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://photography-studio-server.vercel.app/service')
        .then(res=>res.json())
        .then(data=>setServices(data.data))
    },[])
    return (
        <div>
            <h1 className='text-5xl text-center text-orange-600 mt-12'>My Services</h1>
           
            <div className='grid lg:grid-cols-3 lg:gap-8 lg:mx-40 my-20'>
                {
                    services.map(service=><SingleService 
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>
            <div className='mx-auto text-center my-8 w-96'>
                <Link to ='/services'>
                    <button className="btn btn-wide text-xl font-semibold bg-rose-700 hover:bg-red-800">See All</button>
                </Link>
            </div>
        </div>
    );
};

export default HomePageService;