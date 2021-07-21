import React from 'react'
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap'
import { AiOutlineUser } from 'react-icons/ai'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container className='text-center'>
          <Navbar.Brand href='#home'>Todo Birra Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#bebidas'>Ver bebidas</Nav.Link>
              <Nav.Link href='#zonas'>Zonas de entrega</Nav.Link>
              <Nav.Link href='#como'>Como funciona</Nav.Link>
            </Nav>
            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search'
                className='mr-2'
                aria-label='Search'
              />
            </Form>
            <Navbar className='justify-content-center'>
              <Nav.Link href='#cart'>
                <CartWidget />
              </Nav.Link>
              <Nav.Link href='#cart'>
                <AiOutlineUser className='navbar-icon' />
              </Nav.Link>
            </Navbar>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
