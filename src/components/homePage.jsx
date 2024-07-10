import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import housingImage from "../assets/housing.jpeg";
import vetImage from "../assets/vet.jpeg";
import downloadImage from "../assets/download.jpeg";
import "../css/homePage.css"; 

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="landing-page">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={downloadImage}
            alt="First slide"
            onClick={() => handleNavigate("/livestock")}
            style={{ cursor: "pointer" }} 
          />
          <Carousel.Caption>
            <h5>Livestock Management</h5>
            <p>Manage livestock for you.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={vetImage}
            alt="Second slide"
            onClick={() => handleNavigate("/housing")}
            style={{ cursor: "pointer" }} 
          />
          <Carousel.Caption>
            <h5>Feed and Housing</h5>
            <p>Create and manage feeding schedules to optimize nutrition for your livestock.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={housingImage}
            alt="Third slide"
            onClick={() => handleNavigate("/vet")}
            style={{ cursor: "pointer" }}
          />
          <Carousel.Caption>
            <h5>Veterinary</h5>
            <p>Help the health of your livestock with vet care.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <section className="testimonials">
        <Container>
          <h2 className="text-center">What Our Customers Say</h2>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <div className="testimonial-item">
                <p>
                "The Livestock Management System has revolutionized how we handle our livestock sales. The platform is user-friendly and has significantly increased our efficiency and profits. Highly recommend it to all livestock farmers."
                </p>
                <p className="text-right">
                  <strong>- Jane Smith, A local Farmer</strong>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;