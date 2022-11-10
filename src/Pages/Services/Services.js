import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://photography-studio-server.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data.data))
    },[])
    return (
        <div>
            <h1 className='text-5xl text-center text-orange-600 mt-12'>All services:{services.length}</h1>
            <div className='grid lg:grid-cols-3 lg:gap-8 lg:mx-20 my-12'>
                {
                    services.map(service=><SingleService 
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;