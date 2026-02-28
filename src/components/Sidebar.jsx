import React from 'react';
import "../styles/Sidebar.css";
import { NavLink , useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Sidebar = () => {
    const navigate = useNavigate();
  return (
    <div className='sidebar'>
      <ul>
        <li><NavLink to="/"> Dashboard </NavLink></li>
        <li><NavLink to="/users"> Users </NavLink></li>
        <li><NavLink to="/carts"> Carts </NavLink></li>
        <li><NavLink to="/products"> Products </NavLink></li>
        <li><NavLink to="/settings"> Settings </NavLink></li>
      </ul>


          <button className='sidebar__logout__btn' onClick={() => {
            localStorage.removeItem('token')
            setTimeout(() => {
                toast.error('Bye-bye');
                navigate('/login');
            }, 3000);
        }}> Log out </button>
    </div>
  )
}

export default Sidebar