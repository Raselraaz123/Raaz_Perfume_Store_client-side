import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../img/icon/perfume.png'
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth)
  }

  return (
    <div className="full sticky-top">
      <Navbar
        className="nav-style shadow-lg  w-100 sticky  "
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
              <Link to="/blog">Blog</Link>
              {user && (
                <>
                  <Link to="/addItem">Add </Link>
                  <Link to="/manageInventories">Manage </Link>
                  <Link to="/myItem">My Item </Link>
                </>
              )}
              {user ? (
                <button onClick={handleLogout} className="logout-style">
                  Logout
                </button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;