import React from 'react';
import { Outlet } from 'react-router-dom';
import "../styles/Dashboard.css";
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import  './Users';
import  './Carts';
import  './Products';
import './Settings';

const Dashboard = () => {
  return (
    <div>
      <div className='dashboard__container'>
      <Sidebar/>

      <div className='dashboard__navbar'>
        <Navbar/>

        <div className='dashboard__routes'>
         <Outlet/>
        </div>
      </div>
      </div>
    </div>
  )
}
export default Dashboard