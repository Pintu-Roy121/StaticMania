import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../pages/Navbar/Navbar';
import Sponsore from '../../pages/Sponsore/Sponsore';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Sponsore></Sponsore>
        </div>
    );
};

export default Main;