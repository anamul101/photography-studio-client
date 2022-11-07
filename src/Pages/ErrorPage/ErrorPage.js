import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <h1 className='mb-8 font-extrabold text-6xl text-red-600'>opps!</h1>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-3xl text-gray-600'>
            <span className='sr-only'>Error</span>404
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            Sorry,Can't find this page. <br />
            <Link to='/' className='text-bold font-semibold hover:underline hover:text-blue-800'>
                back to homepage
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage