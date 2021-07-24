import { Col, Card } from 'react-bootstrap'

const ItemDetail = ({ nombre, imagen }) => {
  return (
    <Col className='m-2' xs={12} sm={6} lg={3} xl={2}>
      <Card className='card-effect'>
        <Card.Img variant='top' src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ItemDetail
