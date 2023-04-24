import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import "./Home.css";
import { HashLink as Link} from 'react-router-hash-link';

import deliveringFood from "./Images/deliveringFood.jpg";
import samTours from "./Images/sam-tours.jpg";
import BookingInAdvance from "./Images/BookingInAdvance.jpg";


function Offerss() {
    const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
    return(
<div>
  <section className='section border-top' id='offers'>
  <div className='container'>
      <div className='row'>
          <div className='col-md-12 mb-4 text-center'>
              <h3 className='main-heading'>Our Offers</h3>
              <div className='underline mx-auto'></div>
          </div>
              <div className='col-md-4'>
                  <div className='card shadow'>
                      <img src={deliveringFood} className="w-100 border-bottom" alt=" " />
                      <div className='card-body'>
                          <h4>Delivering healthy food</h4>
                          <p>We have good news for you... From now, we have a monthly subscription to order a house and healthy food.</p>
                          
                          <>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setOpen1(!open1)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open1}
                    >
                      Learn more...
                    </Button>
                    <Collapse in={open1}>
                      <div id="example-collapse-text">
                        <p> </p>

  
                        <p>  We provide our delivery food by local cuisine depending to your location; dealing with an industry that offers healthy food. </p>
                          <p>We hope enjoying our offer.</p>
                      <p>For more info, please contact us by sending an <Link to='#contactus'> e-mail </Link> Or throw whatsapp </p>
                      </div>
                    </Collapse>
                  </>
                      </div>
                  </div>
              </div>
              <div className='col-md-4'>
                  <div className='card shadow'>
                      <img src={samTours} className="w-100 border-bottom" alt=" " />
                      <div className='card-body'>
                          <h4>Tourists Offer</h4>

                          <p> We are a customer service oriented travel agency trending to the needs of corporate and non-corporate clients alike.</p>

                          <>
                          <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setOpen2(!open2)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open2}
                    >
                      Learn more...
                    </Button>
                    <Collapse in={open2}>
                      <div id="example-collapse-text">
                        <p></p>

                     <p> In this special offer, Sam Tours lb can simply book for you a ticket to Lebanon. As much as, it provide a tourist plan
                      containing tourist advisor. </p>

                      <p> If you want to know more about this industry, check this link: 
                      https://www.facebook.com/SamTourslb?mibextid=ZbWKwL  </p>

                    
                     <p> <p>For more info, please contact us by sending an <Link to='#contactus'> e-mail </Link> or throw whatsapp: 71563090 </p></p>
                      </div>
                    </Collapse>
                  </>
                      </div>
                  </div>
              </div>
              <div className='col-md-4'>
                  <div className='card shadow'>
                      <img src={BookingInAdvance} className="w-100 border-bottom" alt=" " />
                      <div className='card-body'>
                          <h4>Book in advance and save</h4>
                          <p>When is the best time to book a hotel? We say, in advance!</p>
                          
                          <>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setOpen3(!open3)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open3}
                    >
                      Learn more...
                    </Button>
                    <Collapse in={open3}>
                      <div id="example-collapse-text">
                        <p></p>
                      <p>If you're wondering how far in advance to book a hotel with us, here's how our advance purchase rate works:</p>

                      <p>   - When you book more than seven days before your arrival date, you'll receive 5% off your nightly rate. </p>
                       <p>   - When you book more than 21 days before your arrival date, you'll receive 10% off your nightly rate. </p>
                      </div>
                    </Collapse>
                  </>
                      </div>
                  </div>
              </div>
          </div>
      </div>
</section>
</div>
    )
}

export default Offerss;