import React from "react";
// import Carousell from 'react-bootstrap/Carousel';
import slider from "./Images/slider.jpg";
import "./Home.css";

function Carousell() {
  return (
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="true" >
  <ol class="carousel-indicators">
    <il  data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></il>
    <il  data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></il>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active" interval={3000}>
    <img src={slider} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" interval={3000}>
    <img src={slider} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default Carousell;