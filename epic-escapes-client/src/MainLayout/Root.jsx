import React from 'react';
import NavBar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Root = () => {
    return (
      <div className="min-h-screen flex flex-col container mx-auto px-4">
        <NavBar></NavBar>
        <div className='flex-grow my-5'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Root;