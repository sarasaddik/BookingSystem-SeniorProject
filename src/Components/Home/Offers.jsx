import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import "./Home.css";
import Blue from "./Images/Blue.png";
import { HashLink as Link} from 'react-router-hash-link';


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
                      <img src={Blue} className="w-100 border-bottom" alt=" " />
                      <div className='card-body'>
                          <h4>Breakfast Offer</h4>
                          <p>Enjoy the most important meal of the day, be it private or for a business meeting.</p>
                          
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
                      <p>Choose a variety from freshly prepared eggs, selection of cold cuts, cereals, and fruits.</p>
                      <p>Price: 5 USD/ for 1 person</p>
                      <p>To book the Breakfast package, please contact us by sending an <Link to='#contactus'> e-mail </Link> </p>
                      </div>
                    </Collapse>
                  </>
                      </div>
                  </div>
              </div>
              <div className='col-md-4'>
                  <div className='card shadow'>
                      <img src={Blue} className="w-100 border-bottom" alt=" " />
                      <div className='card-body'>
                          <h4>Romantic Offer</h4>
                          <p>Sara Booking welcomes couples to be pampered in style with this special romantic package,
                             perfect to celebrate a special event or to just enjoy the weekend.</p>

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
                     <p> Whether you plan to celebrate an occasion or simply want to spend quality time away from home, the Sara Booking is the perfect place for you!</p>

                      <p>Romantic package includes:</p>

                    <p>A welcome gift, full breakfast, complimentary use of the sauna and steam room, Opera/ theatre tickets, VAT.</p>
                     <p> <p>To book the Romantic package, please contact us by sending an <Link to='#contactus'> e-mail </Link> </p></p>
                      </div>
                    </Collapse>
                  </>
                      </div>
                  </div>
              </div>
              <div className='col-md-4'>
                  <div className='card shadow'>
                      <img src={Blue} className="w-100 border-bottom" alt=" " />
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