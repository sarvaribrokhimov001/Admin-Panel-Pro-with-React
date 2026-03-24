import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Table = ({ products = [], users = [], handleDelete  }) => {
  const location = useLocation()?.pathname;
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/products/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/products/edit/${id}`);
  };

  return (
    <div>
      <table>
        <thead>
          {location === '/products' ? (
            <tr>
              <th> T/r </th>
              <th> Image </th>
              <th> Price </th>
              <th> Category </th>
              <th> Description </th>
              <th> Title </th>
              <th> Actions </th>
            </tr>
          ) : (
            <tr>
              <th> T/r </th>
              <th> Username </th>
              <th> Email </th>
            </tr>
          )}
        </thead>

        <tbody>
          {location === '/products' ? (
            products.length ? (
              products.map(({ title, price, image, description, category, id }) => (
                <tr key={id}>
                  <td> {id} </td>
                  <td> <img width="80px" src={image} alt={title} /></td>
                  <td> {price} $ </td>
                  <td> {category} </td>
                  <td> {description} </td>
                  <td> {title} </td>
                  <td>
                    <button onClick={() => handleView(id)}> View </button>
                    <button onClick={() => handleEdit(id)}> Edit </button>
                    <button onClick={() => handleDelete(id)}> Delete </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}> No Products </td>
              </tr>
            )
          ) : (
            users?.length ? (
              users.map(({ id, username, email }) => (
                <tr key={id}>
                  <td> {id} </td>
                  <td> {username} </td>
                  <td> {email} </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}> No Users </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}
export default Table;