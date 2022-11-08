import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-base-300'>
            <Link
                to='/'
                className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
                >
                <img className='w-15 h-10 rounded-md' src='/' alt="" />
                <span className='ml-3 text-4xl text-bold'>MW PHOTOGRAPHY</span>
            </Link>
            <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
                <Link to='/home' className= 'mr-5 hover:text-gray-900'>
                    HOME
                </Link>

                <Link to='/services' className='mr-5 hover:text-gray-900'>
                    SERVICES
                </Link>
                <Link to='/blog' className='mr-5 hover:text-gray-900'>
                    BLOG
                </Link>
                <Link to='/reviews' className='mr-5 hover:text-gray-900'>
                    MY REVIEWS
                </Link>
                <Link to='/addservice' className='mr-5 hover:text-gray-900'>
                    ADD SERVICE
                </Link>
                <Link to='/signup' className='mr-5 hover:text-gray-900'>
                    SIGNUP
                </Link>
                <Link to='/signin' className='mr-5 hover:text-gray-900'>
                    SIGNIN
                </Link>
                {/* <>
                    {
                    user?.uid?
                    <> 
                        
                        <div className="tooltip tooltip-bottom cursor-pointer" data-tip={user?.displayName}>  
                            <img src={user?.photoURL} style={{height:'40px'}} className="rounded-full mr-4" alt="" /> 
                        </div>
                        <button onClick={handelLogOut} className='btn btn-outline btn-error mr-2'>
                        Logout
                        </button>
                    </>
                    :
                    <>
                    <button className='btn btn-outline btn-primary mr-2'>
                        <Link to='/lognin'>Login</Link>
                        </button>
                        <button className='btn btn-outline btn-secondary'>
                        <Link to='/register'>Register</Link>
                        </button>
                    </>
                    }
                </> */}
                </nav>
      </div>
    );
};

export default NavBar;