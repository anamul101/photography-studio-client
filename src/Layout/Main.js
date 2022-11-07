import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../SheardPages/Footer/Footer';
import NavBar from '../SheardPages/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;