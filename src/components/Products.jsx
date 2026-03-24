import { useEffect, useState } from 'react';
import Table from './Table';
import axios from 'axios';
import 'react-router-dom';
import "../styles/Products.css";
import { toast } from "react-toastify";

const Products = () => {
  const [products , setProducts] = useState([]);

  useEffect(() => {
    axios
    .get('https://fakestoreapi.com/products')
    .then((data) => setProducts(data?.data))
  } , []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    
    if (confirmDelete) {
      const filtered = products.filter((item) => item.id !== id);
      setProducts(filtered);
      toast.error("Product deleted!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div>
      <Table products = {products} handleDelete={handleDelete} />
    </div>
  )
}
export default Products