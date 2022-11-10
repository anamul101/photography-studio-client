import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';


const SocialLognIn = () => {
    const {authSignInGoogle} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handelGoogle = ()=>{
        authSignInGoogle(googleProvider)
            .then((result)=>{
                const user = result.user;
                console.log(user);
                const currentUser={
                    email: user.email
                }
                
                fetch('https://photography-studio-server.vercel.app/jwt',{
                    method:'POST',
                    headers:{
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                .then(res=>res.json())
                .then(data=>{
                    localStorage.setItem('photography-token', data.token);
                    navigate(from, {replace:true});
                })
            })
            .catch(error=>{
                toast.error(error.message);
            })
        }
    return (
        <div className='flex justify-center'>
            
            <div>
                <button onClick={handelGoogle} className="btn btn-ghost gap-2">
                <FcGoogle className=' text-3xl cursor-pointer'></FcGoogle>
                    GOOGLE
                </button>
            </div>
        </div>
    );
};

export default SocialLognIn;