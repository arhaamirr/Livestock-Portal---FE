import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/homePage.css"; 
import "../lib/owlcarousel/assets/owl.carousel.css";
import CarouselComp from "./Homepage/carousel";
import AboutUs from "./Homepage/aboutUs";
import WhyUs from "./Homepage/whyUs";
import Service from "./Homepage/service";
import Banner from "./Homepage/banner";
import Team from "./Homepage/team";
import Testimonial from "./Homepage/testimonial";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Container className="container-fluid px-0 mb-5">
        <CarouselComp/>
        <AboutUs/>
        <WhyUs/>
        <Banner/>
        <Service/>
        <Team/>
        <Testimonial/>
    </Container>
  );
};

export default HomePage;