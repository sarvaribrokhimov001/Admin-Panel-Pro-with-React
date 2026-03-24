import { useState, useEffect } from 'react'
import Table from './Table'

const Carts = () => {
  const [cartItems, setCartItems] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setCartItems([
        { id: 1, title: "Chair", price: 50, category: "Furniture", description: "Comfortable chair", image: "https://via.placeholder.com/80" },
        { id: 2, title: "Table", price: 120, category: "Furniture", description: "Wooden table", image: "https://via.placeholder.com/80" }
      ])
    }, 1000) 
  }, []);

  return (
    <div>
      <Table products={cartItems} />
    </div>
  )
}

export default Carts