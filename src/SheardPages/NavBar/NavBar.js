import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const NavBar = () => {
    const {user,LogOut} = useContext(AuthContext);
    const handelLogout=()=>{
        LogOut()
            .then(()=>{
                toast.success('You Logout from this website')
            })
            .catch(error=>console.error(error))
    }
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
                {
                    user?.uid &&
                    <>
                    <Link to='/reviews' className='mr-5 hover:text-gray-900'>MY REVIEWS</Link>
                    <Link to='/addservice' className='mr-5 hover:text-gray-900'>ADD SERVICE</Link>
                    </>
                }
                
                <>
                    {
                    user?.uid?
                    <> 
                        
                        <div>  
                            <img src={user?.photoURL} style={{height:'40px'}} className="rounded-full mr-4" alt="" /> 
                        </div>
                        <button onClick={handelLogout} className="btn border border-orange-500 bg-orange-500 hover:bg-orange-800">LogOut</button>
                    </>
                    :
                    <>
                        <Link to='/signin' className='mr-5 hover:text-gray-900'>
                            <button className="btn">SIGNIN</button>
                        </Link>

                        <Link to='/signup' className='mr-5 hover:text-gray-900'>
                            <button className="btn">SIGNUP</button>
                        </Link> 
                    </>
                    
                    }
                </>
                </nav>
      </div>
    );
};

export default NavBar;