import React from 'react';
import { Link } from 'react-router-dom';
import SocialLognIn from '../../SheardPages/SocialLognIn/SocialLognIn';

const SignIn = () => {
    const handelSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
    }
    return (
        <>
             <div className="rounded-md flex-shrink-0 mx-auto w-full max-w-sm my-10 bg-base-100 pb-20 border border-orange-600">
                    <h1 className="text-4xl font-bold text-center pt-5">SignIn</h1>
                    <form onSubmit={handelSubmit} className="card-body">
                        <div className="form-control">
                            <input type="email" placeholder="Enter email" name="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <input type="password" name="password" placeholder="Type password" className="input input-bordered" required/>
                        </div>
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