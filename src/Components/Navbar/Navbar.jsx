import React from 'react'
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import './Navbar.css'

const NavBarMenu = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
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
            <Navbar>
              <Nav.Link href='#cart'>
                <AiOutlineShoppingCart className='navbar-icon' />
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

export default NavBarMenu
