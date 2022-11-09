import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';
import UserReviews from './UserReviews';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [userReviews, setUserReviews] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setUserReviews(data.data))
        .catch(error=>console.error(error))
    },[user?.email])

    // review delate
    const handelDelete = (id)=>{
        const proced = window.confirm('are you sure? you want to deleted youre review');
        if(proced){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data =>{
               
                if(data.success){
                    toast.success(data.message);
                    const remainging = userReviews.filter(rev => rev._id !== id);
                    setUserReviews(remainging);
                }else{
                    toast.error(data.error)
                }
            })
            .catch(error=>toast.error(error.message))
        }
    }
    return (
        <div>
            <h1>My Reviews : {userReviews.length}</h1>
            <>
                { 
                    <div className='grid lg:grid-cols-3 lg:gap-8 lg:mx-20'>
                    {
                        userReviews.map(userReview=><UserReviews
                        key={userReview._id}
                        userReview={userReview}
                        handelDelete={ handelDelete}
                        ></UserReviews>)
                    }
                    </div>
                }
            </>
        </div>
    );
};

export default MyReviews;