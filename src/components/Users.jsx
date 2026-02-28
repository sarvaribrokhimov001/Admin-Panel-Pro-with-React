import React, { useEffect, useState } from 'react'
import Table from './Table'
import axios from 'axios';
import { data } from 'react-router-dom';

const Users = () => {
  const [users , setUsers] = useState([]);

  useEffect(() => {
    axios
    .get('https://fakestoreapi.com/users')
    .then((data) => setUsers(data?.data))
  } , []);

  return (
    <div>
      <Table users = {users} />
    </div>
  )
}

export default Users