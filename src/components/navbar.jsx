import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../css/NavbarComponent.css'; 
const NavbarComponent = () => {
  return (
    <Navbar
      bg="white"
      expand="lg"
      className="sticky-top px-4 px-lg-5 navbar-light"
    >
      <Container fluid>
        <Navbar.Brand href="/" className="d-flex align-items-center me-auto">
          <h1 className="m-0">Herhub</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarCollapse" className="me-0" />
        <Navbar.Collapse id="navbarCollapse">
          <Nav className="ms-auto p-4 p-lg-0">
            <Nav.Link href="/" className="nav-button">
              Home
            </Nav.Link>
            <Nav.Link href="/liveStock" className="nav-button">
              LiveStock
            </Nav.Link>
            <Nav.Link href="/vet" className="nav-button">
              Veterinary care
            </Nav.Link>
            <Nav.Link href="/login" className="nav-button">
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
