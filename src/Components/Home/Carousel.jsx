import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Hotel1 from "./Images/Hotel1.jpg";
import Hotel2 from "./Images/Hotel2.jpg";
import "./Home.css";

function Carousell() {
  return (
    <div className="carouselDiv mx-auto mt-4 ">
    <Carousel className="mx-auto carouselSize"
    controls={false}
    fade={true}
    pause={false}>
      <Carousel.Item interval={3000}>
        <img className="carouselImg d-block w-100"
          src={Hotel1}
          alt="First slide"
        />
        <Carousel.Caption className="carouselCaption">
          <h3>Find your next stay</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <img className="carouselImg d-block w-100"
          src={Hotel2}
          alt="Second slide"
        />
        <Carousel.Caption className="carouselCaption">
          <h3>Search low prices on hotels, apartments and much more...</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carousell;