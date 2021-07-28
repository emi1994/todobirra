import React from 'react'
import { Col, Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './Item.css'
const Item = ({ nombre, descripcion, precio, imagen, id }) => {
  return (
    <Col className='m-2' xs={12} sm={6} lg={3} xl={2}>
      <Card className='card-effect'>
        <Card.Img variant='top' src={imagen} />
        <Card.Body>
          <Card.Title>
            <Link to={`/details/${id}`}>{nombre}</Link>
          </Card.Title>
          <Card.Text>
            {descripcion}
            <span>Precio: ${precio}</span>
          </Card.Text>
        </Card.Body>
        <ItemCount stock={5} initial={1} />
      </Card>
    </Col>
  )
}

export default Item
