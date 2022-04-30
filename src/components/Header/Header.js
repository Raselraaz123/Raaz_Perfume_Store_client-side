import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/icon/perfume.png'
import './Header.css'

const Header = () => {
  return (
    <Navbar
      className="shadow-lg  w-100"
      collapseOnSelect
      expand="lg"
      bg="text-dark"
      variant=""
    >
      <Container>
        <Navbar.Brand to="/home">
          <Link to="/home">
            <img className="rounded" height={50} src={logo} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggle-style"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="link-style  me-auto">
            <Link to="/">Home</Link>
            <Link to="/inventore">Inventore Item</Link>

            <Link to="/about">About us</Link>
            <Link eventKey={2} to="/login">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;