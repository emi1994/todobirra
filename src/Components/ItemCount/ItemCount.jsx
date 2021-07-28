import React from 'react'
import { useState } from 'react'
import { Col, Row, Button, Container, Card } from 'react-bootstrap'

const ItemCount = ({ stock, initial }) => {
  const [cantidad, setCantidad] = useState(initial)

  const handleIncrement = () => {
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

  const handleOnAdd = (count) => {
    alert(`You added ${count} items to your cart`)
  }

  return (
    <>
      <Container className='justify-content-center'>
        <Row>
          <Col className='col-xs-12 mt-2'>
            <Row>
              <Col className='mt-2' sm={4} xs={4} lg={4}>
                <Button onClick={() => handleDecrement()}>-</Button>
              </Col>

              <Col className='mt-2' sm={4} xs={4} lg={4}>
                <Card.Text>{cantidad}</Card.Text>
              </Col>
              <Col className='mt-2' sm={4} xs={4} lg={4}>
                <Button onClick={() => handleIncrement()}>+</Button>
              </Col>
            </Row>
            <Row className='d-grid gap-2 m-2' sm={12} xs={12} lg={12}>
              <Button
                onClick={() => handleOnAdd(cantidad)}
                variant='primary'
                size='s'
              >
                Add to Cart
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ItemCount
