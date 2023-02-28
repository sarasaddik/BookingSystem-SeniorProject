import React from "react";
 // import Carousell from 'react-bootstrap/Carousel';
import slider from "./Images/slider.jpg";
import "./Home.css";

// function Carousell() {
//   return (
// <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="true" >
//   <ol className="carousel-indicators">
//     <il  data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></il>
//     <il  data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"> </il>
//   </ol>
//   <div className="carousel-inner">
//     <div className="carousel-item active" interval={3000}>
//     <img src={slider} className="d-block w-100" alt="..."/>
//       <div className="carousel-caption d-none d-md-block">
//         <h5>Find Your Next Stay...</h5>
        
//       </div>
//     </div>
//     <div className="carousel-item" interval={3000}>
//     <img src={slider} className="d-block w-100" alt="..."/>
//       <div className="carousel-caption d-none d-md-block">
//         <h5>Second slide label</h5>
//         <p>Some representative placeholder content for the second slide.</p>
//       </div>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
//   );
// }

// export default Carousell;

import { CCarousel } from '@coreui/react'
import { CCarouselCaption } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import { CImage } from '@coreui/react'

function Carousell() {

  return(
  <CCarousel controls indicators dark>
  <CCarouselItem>
    <CImage className="d-block w-100" src={slider} alt="slide 1" />
    <CCarouselCaption className="d-none d-md-block">
      <h5><b>Find You Next Stay...</b></h5>
     
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={slider} alt="slide 2" />
    <CCarouselCaption className="d-none d-md-block">
     
      <p><b>Search low prices on hotels, apartments and much more...</b></p>
    </CCarouselCaption>
  </CCarouselItem>
</CCarousel>
  )
}

export default Carousell;