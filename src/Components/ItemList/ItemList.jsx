import React from 'react'
import Item from '../Item/Item'
import { Row } from 'react-bootstrap'

const ItemList = ({ products }) => {
  return (
    <>
      <Row className='justify-content-center'>
        {products.map((producto) => (
          <Item
            key={producto.id}
            nombre={producto.name}
            descripcion={producto.description}
            precio={producto.price}
            imagen={producto.image}
          />
        ))}
      </Row>
    </>
  )
}

export default ItemList
