import { useEffect } from 'react'
import { Route , Routes, useNavigate } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import Dashboard from '../components/Dashboard'
import Users from '../components/Users'
import Carts from '../components/Carts'
import Products from '../components/Products'
import Settings from '../components/Settings'
import ProductView from "../components/ProductView";
import ProductEdit from "../components/ProductEdit";

const Router = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate()

    useEffect(() => {
        if(!token) {
            navigate('/login');
        }
    } , [token , navigate])

  return (
    <Routes>
        {token ? (
           <Route path='/' element = {<Dashboard/>} >
                <Route path='/users' element = {<Users/>} />
                <Route path='/carts' element = {<Carts/>} />
                <Route path='/products' element = {<Products/>} />
                <Route path='products/:id' element={<ProductView />} />
                <Route path='products/edit/:id' element={<ProductEdit />} />
                <Route path='/settings' element = {<Settings/>} />
           </Route> 
        ) : (
            <Route path='/login' element = {<LoginForm/>} />
        )}  
    </Routes>
  )
}
export default Router