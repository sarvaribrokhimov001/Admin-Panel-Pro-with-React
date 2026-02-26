import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Dashboard.css";
import { toast } from 'react-toastify';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
        <button className='dashboard__logout__btn' onClick={() => {
            localStorage.removeItem('token')
            setTimeout(() => {
                toast.error('bye')
                navigate('/');
            }, 2000);
        }}> Log out </button>
    </div>
  )
}
export default Dashboard