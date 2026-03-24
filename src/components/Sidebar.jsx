import React from 'react';
import "../styles/Sidebar.css";
import { NavLink , useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Sidebar = () => {
    const navigate = useNavigate();
  return (
    <div className='sidebar'>
      <ul className='sidebar__links'> 
        <li><NavLink className={'sidebar__link'} to="/"> Dashboard </NavLink></li>
        <li><NavLink className={'sidebar__link'} to="/users"> Users </NavLink></li>
        <li><NavLink className={'sidebar__link'} to="/carts"> Carts </NavLink></li>
        <li><NavLink className={'sidebar__link'} to="/products"> Products </NavLink></li>
        <li><NavLink className={'sidebar__link'} to="/settings"> Settings </NavLink></li>
      </ul>

          <button className='sidebar__logout__btn' onClick={() => {
            toast.error('Bye-bye');
            setTimeout(() => {
                toast.dismiss(); 
                localStorage.removeItem('token');
                navigate('/login');
            }, 1500);
          }}> Log out </button>
      </div>
  )
}

export default Sidebar