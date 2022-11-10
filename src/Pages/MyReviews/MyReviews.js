import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';
import UserReviews from './UserReviews';

const MyReviews = () => {
    const {user,LogOut} = useContext(AuthContext);
    const [userReviews, setUserReviews] = useState([]);
    useEffect(()=>{
        fetch(`https://photography-studio-server.vercel.app/reviews?email=${user?.email}`,{
            headers:{
                authorization:`bearer ${localStorage.getItem('photography-token')}`
            }
        })
        .then(res=>{
            if(res.status === 401 || res.status === 403){
                LogOut();
            }
            return res.json()
        })
        .then(data=>setUserReviews(data.data))
        .catch(error=>console.error(error))
    },[user?.email,LogOut])

    // review delate
    const handelDelete = (id)=>{
        const proced = window.confirm('are you sure? you want to deleted youre review');
        if(proced){
            fetch(`https://photography-studio-server.vercel.app/reviews/${id}`,{
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
            <h1 className='text-5xl text-center text-orange-600 mb-8'>Your Reviews :{userReviews.length}</h1>
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