import React from "react";
import slider from "./Images/slider.jpg";
import slider2 from "./Images/slider2.jpg";
import slider3 from "./Images/slider3.jpg";
import slider4 from "./Images/slider4.jpg";

import "./Home.css";

import { CCarousel } from '@coreui/react'
import { CCarouselCaption } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import { CImage } from '@coreui/react'

function Carousell() {

  return(
  <CCarousel controls indicators dark>
  <CCarouselItem>
    <CImage className="d-block w-100" src={slider} alt="slide 1" />
  </CCarouselItem>

  <CCarouselItem>
    <CImage className="d-block w-100" src={slider2} alt="slide 2" />
  </CCarouselItem>

  
  <CCarouselItem>
    <CImage className="d-block w-100" src={slider3} alt="slide 2" />
  </CCarouselItem>

  <CCarouselItem>
    <CImage className="d-block w-100" src={slider4} alt="slide 2" />
  </CCarouselItem>

</CCarousel>
  )
}

export default Carousell;