import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'

const ItemDetailContainer = () => {
  const [items, setItems] = useState([])

  console.log(items)
  return (
    <div>
      <h1>Item Detail Container</h1>
    </div>
  )
}

export default ItemDetailContainer
