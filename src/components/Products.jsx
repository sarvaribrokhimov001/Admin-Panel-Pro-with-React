import React, { useEffect, useState } from 'react'
import Table from './Table'
import axios from 'axios';
import { data } from 'react-router-dom';

const Products = () => {
  const [products , setProducts] = useState([]);

  useEffect(() => {
    axios
    .get('https://fakestoreapi.com/products')
    .then((data) => setProducts(data?.data))
  } , []);
  
  return (
    <div>
      <Table products = {products} />
    </div>
  )
}

export default Products