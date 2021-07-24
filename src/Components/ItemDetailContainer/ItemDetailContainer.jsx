import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import database from '../../productsDB.json'
import { useState, useEffect, Row } from 'react'

const ItemDetailContainer = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((data) => data.json())
      .then((res) => setItems(res.results))
  }, [])

  console.log(items)
  return (
    <div>
      <h1>Item Detail Container</h1>
      {items.map((pokemon) => (
        <ItemDetail nombre={pokemon.name} imagen={pokemon.url} />
      ))}
    </div>
  )
}

export default ItemDetailContainer
