import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import Logo from '../assets/logo.png'
const Header = () => {
    return ( 
<header>
<Navbar variant="dark" expand={false}>
  <Container>
    <LinkContainer to="/"><Navbar.Brand><img src={Logo} alt='logo' className="app__logo"/></Navbar.Brand></LinkContainer>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <LinkContainer to="/cart"><Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link></LinkContainer>
        <LinkContainer to="/login"><Nav.Link><i className="fas fa-user"></i>Sign In</Nav.Link></LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</header>
  )
}

export default Header
