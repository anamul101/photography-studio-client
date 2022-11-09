import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const EditReview = () => {
    const userReview = useParams();
    const {id} = userReview;
    const [userReviews, setUserReviews] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews/${id}`)
        .then(res=>res.json())
        .then(data=>setUserReviews(data.data))
        .catch(error=>console.error(error))
    },[id])
   const handelReviewUpdate=(event)=>{
    event.preventDefault();
    const userReviews ={
        newReview : event.target.newReview.value
    }
        fetch(`http://localhost:5000/reviews/${id}`,{
            method:'PUT',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(userReviews)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                toast.success(data.message);
                navigate('/reviews')
            }else{
                toast.error(data.error)
            }
        })
        .catch(error=>toast.error(error.message))
        console.log(userReviews)
   }
    return (
        <section className='lg:w-2/3 mx-auto mb-12 '>
            <h1 className='text-4xl font-bold text-center my-8'>Review Update Now</h1>
        <form onSubmit={handelReviewUpdate}>
            <input type="text" placeholder="Type here" name='serviceName' defaultValue={userReviews?.serviceName} readOnly className="input input-ghost text-center w-full" disabled /> <br />
            <div className='mt-4 text-center'>
                <textarea className="textarea textarea-warning w-1/2 h-60" name='newReview' defaultValue={userReviews?.reviewText} placeholder="Give your best Reviews..."></textarea>
            </div>
            <div className="form-control w-1/2 mx-auto">
                <input className="btn btn-warning hover:bg-orange-500 mt-4" type="submit" value="Update Submit" />
            </div>
        </form>
        </section>
    );
};

export default EditReview;