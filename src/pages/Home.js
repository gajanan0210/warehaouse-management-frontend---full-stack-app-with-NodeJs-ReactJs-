import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import State from '../pages/State';
import City from '../pages/City';
import Warehouse from '../pages/Warehouse';
import './css/Home.css';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="main">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<center><div>Welcome to the Home Page</div></center>} />
            <Route path="state" element={<State />} />
            <Route path="city" element={<City />} />
            <Route path="warehouse" element={<Warehouse />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Home;
