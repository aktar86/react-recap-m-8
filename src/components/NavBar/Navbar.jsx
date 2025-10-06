import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex justify-between items-center py-5 border-b-2 border-gray-200'>
            <div className='flex items-center'>
                    <span className='flex items-center'>
                        <span 
                        className='cursor-pointer md:hidden'
                        onClick={() => setOpen(!open)}>
                            {open? <X></X> :  <Menu></Menu>}
                        </span>
                        <ul className={`absolute ${open? "top-15": "-top-50"}`}>
                            <li className='mr-2 py-2 px-3 bg-amber-200'><NavLink to='/' > Home</NavLink></li>
                            <li className='mr-2 py-2 px-3 bg-amber-200'><NavLink to='/products' >Products</NavLink></li>
                            <li className='mr-2 py-2 px-3 bg-amber-200'><NavLink to='/wishlist' >Wishlist</NavLink></li>
                        </ul>
                    </span>
                    <h1 className='text-2xl font-bold ml-2 lg:ml-0'>Home Decor</h1>
            </div>
            <div className='hidden lg:flex items-center '>
                <ul className='flex items-center'>
                    <li className='mr-2 py-2 px-3'><NavLink to='/' > Home</NavLink></li>
                    <li className='mr-2 py-2 px-3'><NavLink to='/products' >Products</NavLink></li>
                    <li className='mr-2 py-2 px-3'><NavLink to='/wishlist' >Wishlist</NavLink></li>
                </ul>
                <NavLink to='/' className='py-2 px-4 bg-blue-600 text-white'>Visit Shop</NavLink>
            </div>
        </div>
    );
};

export default Navbar;