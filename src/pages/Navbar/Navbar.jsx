import React from 'react';
import logo from '../../Images/Logo1.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-white pb-10'>
            <div className='w-11/12 py-4 mx-auto flex justify-between'>
                <Link to='/'>
                    <img src={logo} alt="" srcset="" />
                </Link>
                <Link to='/about' className='text-black text-2xl font-bold'>About</Link>
            </div>
        </div>
    );
};

export default Navbar;