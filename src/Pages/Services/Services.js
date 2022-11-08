import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data.data))
    },[])
    return (
        <div>
            <h1>all services :{services.length}</h1>
            <div className='grid lg:grid-cols-3 lg:gap-8 lg:mx-20'>
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