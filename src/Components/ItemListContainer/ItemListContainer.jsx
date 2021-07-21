import React from 'react'
import { Container } from 'react-bootstrap'
import ItemList from '../ItemList/ItemList'



const ItemListContainer = () => {
  return (
    <Container fluid className='text-center'>
      <h2>This is my ItemListContainer</h2>
      <ItemList/>

    </Container>
  )
}

export default ItemListContainer
