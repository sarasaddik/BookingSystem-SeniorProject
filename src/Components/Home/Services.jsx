import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import "./Home.css";
import { HashLink as Link} from 'react-router-hash-link';
import taxiService from "./Images/taxiService.jpg";
import laundryService from "./Images/laundryService.jpg";
import checkingRoom from "./Images/checkingRoom.jpg";


function Servicess() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <div>
      <section className="section border-top" id="service">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img src={taxiService} className="w-100 border-bottom" alt=" " />
                <div className="card-body">
                  <h6>TAXI Service</h6>
                <h4>WELCOME TO HOTEL TAXI</h4>

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
                        <p></p>
                    <p>  We hope you enjoy our direct and easy transfer service to your hotel.</p>
                    <p>  Wheather you are just arriving or head home, let us get you to your destination without the hassle.</p>
                    <p><h4>  Your Hoteltaxi Team</h4>  </p>  
                    <p>For more info contact us by sending an <Link to='#contactus'> e-mail </Link> </p>                 
                       </div>
                    </Collapse>
                  </>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img src={laundryService} className="w-100 border-bottom" alt=" " />
                <div className="card-body">
                  <h6>Laundry Service</h6>
                 <h4> Laundered The Same Day</h4>
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
                      <p>  Our wash team will wash, dry and fold your clothes ready to go.
                       We pride ourselves on keeping your clothes in top shape, and delivering your clean laundry on time, and in best form. </p>
                      For more info contact us on <Link to='#contactus'> e-mail </Link>
                      </div>
                    </Collapse>
                  </>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img src={checkingRoom} className="w-100 border-bottom" alt=" " />
                <div className="card-body">
                  <h6>Inspectation service</h6>
                  <h4> Rooms Inspectation</h4>
                  <>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setOpen3(!open3)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open3}
                    >
                      Learn More...
                    </Button>
                    <Collapse in={open3}>
                      <div id="example-collapse-text">
                      <p>  If you are living abroad, or you are far away from our destination, you can choose the perfect room that fits you.</p>
                     <p>  Calling us by video call, so we can show you more details about the room that you have been book it. </p>
                     <p>Our number: 71563090</p>
                     For more info contact us on <Link to='#contactus'> e-mail </Link> Or throw whatsapp.
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
  );
}

export default Servicess;
