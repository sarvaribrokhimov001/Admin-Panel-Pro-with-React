import React from 'react'
import { useLocation } from 'react-router-dom'

const Table = ({products , users}) => {
  const location = useLocation()?.pathname;
  console.log(location);
  
  return (
    <div>
        <table>
          <thead>

          {
            location === '/products' ? (

            <tr>
              <th>t/r</th>
              <th>Image</th>
              <th>Price</th>
              <th>Category</th>
              <th>Description</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>

            ) : (

            <tr>
              <th>t/r</th>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>

            )}

          </thead>

          <tbody style={{overflowY : "auto" , height: "100vh" , border: "10px solid "}}>

            {
              location === '/products' ? (

              products.length ? (
                products.map(({title , price , image , description , category , id}) => (
                  <tr key={id}>
                    <td> {id} </td>
                    <td> <img width={'80px'} src={image} alt={title} /> </td>
                    <td> {price} $ </td>
                    <td> {category} </td>
                    <td> {description} </td>
                    <td> {title} </td>
                    <td> 
                      <button>View</button>
                      <button>Edit</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))
              ) : null

              ) : (
                users.length ? (
                  users.map(({id , username , email}) => (
                    <tr>
                      <td> {id} </td>
                      <td> {username} </td>
                      <td> {email} </td>
                    </tr>
                  ))
                ) : <tr>
                  <td> loading .... </td>
                </tr>
              )}

          </tbody>
        </table>
    </div>
  )
}

export default Table