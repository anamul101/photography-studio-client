
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import SocialLognIn from '../../SheardPages/SocialLognIn/SocialLognIn';
import toast from 'react-hot-toast';

const SignUp = () => {
    const {createUser,authUpdate} = useContext(AuthContext);
    const navigate = useNavigate();

    const handelSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const photourl = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,photourl,email,password);
        createUser(email,password)
            .then(result=>{
                const user = result.user;
                console.log(user);
                profileUpdate(name,photourl);
                form.reset();
                toast.success('SignUp Successfully');
                navigate('/signin')
            })
            .catch(error=>{
                console.error(error.message);
            })
    }
    const profileUpdate =(name,photoURL)=>{
        const userProfileDetails = {
            displayName: name,
            photoURL: photoURL,
        }
        authUpdate(userProfileDetails)
            .then(()=>{})
            .catch(error=>console.error(error));
    }
    return (
        <>
             <div className="rounded-md flex-shrink-0 mx-auto w-full max-w-sm my-10 bg-base-100 pb-20 border border-orange-600">
                    <h1 className="text-4xl font-bold text-center pt-5">Sign Up</h1>
                    <form onSubmit={handelSubmit} className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="Full Name" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="PhotoURL" name="photoURL" className="input input-bordered" />
                        </div>
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
                    <p className='text-center'>Already have an account? <Link className='font-bold text-orange-600 hover:underline' to='/signin'>SignIn</Link></p>
                    <div className=' mt-5 text-2xl font-bold'>
                        <SocialLognIn></SocialLognIn>
                    </div>
                </div>
        </>
    );
};

export default SignUp;