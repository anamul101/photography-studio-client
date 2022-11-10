import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserReviews = ({userReview, handelDelete}) => {
    const {_id, reviewText,serviceName,service}=userReview;
    const [services, setServices]=useState({});
    const navigate = useNavigate();
    
    useEffect(()=>{
        fetch(`https://photography-studio-server.vercel.app/services/${service}`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[service])

    // reviews update 
    const handelUpdate =(id)=>{
        navigate(`/editreview/${id}`)
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            {
                services?.img &&
                <figure><img src={services.img} alt="Shoes" /></figure>
            }
            <div className="card-body">
                <h2 className="card-title">
                    {serviceName}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Reviews: {reviewText}</p>
                <div className="card-actions justify-end">
                <div onClick={()=>handelDelete(_id)} className="btn btn-sm cursor-pointer btn-outline hover:btn-ghost">DELETE</div> 
                <div onClick={()=>handelUpdate(_id)} className="btn btn-sm btn-outline hover:btn-ghost">EDIT</div>
                </div>
            </div>
        </div>
    );
};

export default UserReviews;