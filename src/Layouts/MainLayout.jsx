import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/NavBar/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='max-w-[1440px] mx-auto flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;