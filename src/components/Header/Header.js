import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../img/icon/perfume.png'
import './Header.css'

const Header = () => {
  return (
    <Navbar
      className="shadow-lg mt-2"
      collapseOnSelect
      expand="lg"
      bg="text-dark"
      variant=""
    >
      <Container>
        <Navbar.Brand to="/home">
          <img className="rounded" height={50} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  className='toggle-style' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="link-style  me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/inventore">Inventore Item</Nav.Link>
          
            <Nav.Link to="/about">About us</Nav.Link>
            <Nav.Link eventKey={2} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;