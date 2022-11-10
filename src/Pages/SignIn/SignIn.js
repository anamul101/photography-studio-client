import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import SocialLognIn from '../../SheardPages/SocialLognIn/SocialLognIn';

const SignIn = () => {
    const [reserPassword, setResetPassword] = useState('');
    const {authLognIn,forgetPassword} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handelSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password)
        authLognIn(email,password)
            .then(result=>{
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
                    toast.success('Your LognIn Successfull');
                })
                form.reset();
                 
            })
            .catch(error=>{
                toast.error(error.message);
            })
    }
    const handelaReset = ()=>{
        forgetPassword(reserPassword)
         .then(()=>{
           toast.success('Reset password link hase been send your email')
           
         })
         .catch(error=>{
           const showError = error.message;
           toast.error(showError);
         })
     }
    return (
        <>
             <div className="rounded-md flex-shrink-0 mx-auto w-full max-w-sm my-10 bg-base-100 pb-20 border border-orange-600">
                    <h1 className="text-4xl font-bold text-center pt-5">SignIn</h1>
                    <form onSubmit={handelSubmit} className="card-body">
                        <div className="form-control">
                            <input onBlur={(e)=>setResetPassword(e.target.value)} type="email" placeholder="Enter email" name="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <input type="password" name="password" placeholder="Type password" className="input input-bordered" required/>
                        </div>
                        <p onClick={handelaReset} className='font-bold text-light hover:underline hover:text-blue-600 cursor-pointer'>Reset Password</p>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SignUp" />
                        </div>
                    </form>
                    <p className='text-center'>If you New in this site please <Link className='font-bold text-orange-600 hover:underline' to='/signup'>Sign Up</Link></p>
                    <div className=' mt-5 text-2xl font-bold'>
                        <SocialLognIn></SocialLognIn>
                    </div>
                </div>
        </>
    );
};

export default SignIn;