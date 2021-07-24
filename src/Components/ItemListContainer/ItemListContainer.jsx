import React from 'react'
import { Container } from 'react-bootstrap'
import ItemList from '../ItemList/ItemList'
import database from '../../productsDB.json'

const ItemListContainer = ({ cart, setCart }) => {
  return (
    <Container fluid className='text-center'>
      <h2>This is my ItemListContainer</h2>
      <ItemList database={database} cart={cart} setCart={setCart} />
    </Container>
  )
}

export default ItemListContainer
