import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='w-full bg-primary sticky top-0 z-10'>
            <Navbar></Navbar>
            </div>
            <div className='max-w-screen-2xl mx-auto'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;