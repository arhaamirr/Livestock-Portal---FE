import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} sm={6}>
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
              iaculis mauris.
            </p>
          </Col>
          <Col md={4} sm={6}>
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/livestock">Livestock</a></li>
              <li><a href="/vet">Veterinery services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4} sm={12}>
            <h5>Contact Us</h5>
            <p>
              Address: 123 Street, City, Country<br />
              Phone: +123 456 7890<br />
              Email: info@example.com
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6} className="text-start">
            <p>&copy; 2024 Livestock Management System. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-end">
            <ul className="footer-nav">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Legal Notice</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
