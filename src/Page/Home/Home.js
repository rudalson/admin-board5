import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Sidebar from '../../Component/Sidebar/Sidebar';
import './home.css';

const Home = () => {
  return (
    <div>
      <div className='mainHeaderContainer'>
        <Sidebar />
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
