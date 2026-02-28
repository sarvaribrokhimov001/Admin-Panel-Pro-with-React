import React from 'react';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import "../styles/Dashboard.css";
import { toast } from 'react-toastify';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Users from './Users';
import Carts from './Carts';
import Products from './Products';
import Settings from './Settings';

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