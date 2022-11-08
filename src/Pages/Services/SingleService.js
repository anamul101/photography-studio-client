import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({service}) => {
    const {title,img,description,price,rating,_id}=service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Photography wedding" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                <div className="badge badge-secondary flex justify-between"><p>Pating</p> <p>{rating}</p></div>
                </h2>
                <h2 className='text-xl font-bold text-orange-500'>Price: ${price}</h2>
                <p>{description && description.slice(0,90)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/serviceDetails/${_id}`}>
                        <button className="btn btn-outline btn-warning">service Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;