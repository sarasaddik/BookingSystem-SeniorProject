import React from "react";
import slider from "./Images/slider.jpg";
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