import React from 'react';
import "../styles/Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar__links'> 
        <li><NavLink className={'navbar__link'} to="/"> Dashboard </NavLink></li>
        <li><NavLink className={'navbar__link'} to="/users"> Users </NavLink></li>
        <li><NavLink className={'navbar__link'} to="/carts"> Carts </NavLink></li>
        <li><NavLink className={'navbar__link'} to="/products"> Products </NavLink></li>
        <li><NavLink className={'navbar__link'} to="/settings"> Settings </NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar