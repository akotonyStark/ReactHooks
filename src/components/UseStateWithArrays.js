import React, { useState } from 'react'

const UseStateWithArrays = () => {
  const [items, setItems] = useState([])

  let groceryItem = {
    id: items.length,
    name: 'Apple',
    price: '$4',
    quantity: 89,
    shop: 'Dollar tree',
  }

  const addItems = () => {
    setItems([...items, groceryItem])
  }
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <button onClick={addItems}>Add Item</button>
    </>
  )
}

export default UseStateWithArrays
