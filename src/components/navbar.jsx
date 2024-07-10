import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../css/NavbarComponent.css'; 
const NavbarComponent = () => {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">Herhub</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="nav-button">Home</Nav.Link>
            <Nav.Link href="/liveStock" className="nav-button">LiveStock</Nav.Link>
            <Nav.Link href="/vet" className="nav-button">Veterinary care</Nav.Link>
            <Nav.Link href="/login" className="nav-button">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
