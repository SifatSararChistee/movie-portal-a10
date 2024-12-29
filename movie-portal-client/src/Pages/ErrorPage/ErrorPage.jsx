import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <p className='text-7xl text-red-500'>Page Not Found</p>
            <p className='text-3xl text-red-500 mt-8'>Error 404</p>
            <Link to={'/'}><button className='text-xl btn mt-10'>Go Back to Home </button></Link>
        </div>
    );
};

export default ErrorPage;