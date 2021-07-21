import React from 'react'
import { useState } from 'react'
import { Col, Row, Button, Container, Card } from 'react-bootstrap'

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial)

  const handleIncrement = () => {
    console.log(cantidad)
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    } else {
      console.log(
        'cant increase more than the actual stock (replace with a better action)'
      )
    }
  }

  const handleDecrement = () => {
    if (cantidad > initial) {
      setCantidad(cantidad - 1)
    } else {
      console.log('cant decrease more (replace with a better action)')
    }
  }

  const handleOnAdd = () => {
    onAdd(cantidad)
  }

  return (
    <>
      <Container className='justify-content-center'>
        <Row>
          <Col className='col-xs-12 mt-2'>
            <Card>
              <Card.Body>
                <Row>
                  <Col className='col-xs-4 mt-2'>
                    <Button onClick={() => handleIncrement()}>+</Button>
                  </Col>
                  <Col className='col-xs-4 mt-2'>
                    <Card.Text>{cantidad}</Card.Text>
                  </Col>
                  <Col className='col-xs-4 mt-2'>
                    <Button onClick={() => handleDecrement()}>-</Button>
                  </Col>
                </Row>
                <Row fluid className='d-grid gap-2 mt-2'>
                  <Button
                    onClick={() => handleOnAdd()}
                    variant='primary'
                    size='s'
                  >
                    Add to Cart
                  </Button>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ItemCount
