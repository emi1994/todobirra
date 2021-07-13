import React from 'react'
import { Container } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

const handleCount = (count) => {
  alert(`You added ${count}`)
}

const ItemListContainer = () => {
  return (
    <Container fluid className='text-center'>
      <h2>This is my ItemListComponent</h2>
      <ItemCount stock={5} initial={1} onAdd={handleCount} />
    </Container>
  )
}

export default ItemListContainer
