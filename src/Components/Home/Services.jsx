import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import "./Home.css";
import Blue from "./Images/Blue.png";

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
                <img src={Blue} className="w-100 border-bottom" alt=" " />
                <div className="card-body">
                  <h6>TAXI Service</h6>
                  <div className="underline"></div>
                  <>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setOpen1(!open1)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open1}
                    >
                      Learn More...
                    </Button>
                    <Collapse in={open1}>
                      <div id="example-collapse-text">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </div>
                    </Collapse>
                  </>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img src={Blue} className="w-100 border-bottom" alt=" " />
                <div className="card-body">
                  <h6>Laundry Service</h6>
                  <div className="underline"></div>
                  <>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setOpen2(!open2)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open2}
                    >
                      Learn More...
                    </Button>
                    <Collapse in={open2}>
                      <div id="example-collapse-text">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </div>
                    </Collapse>
                  </>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img src={Blue} className="w-100 border-bottom" alt=" " />
                <div className="card-body">
                  <h6>Check up rooms by VideoCall</h6>
                  <div className="underline"></div>
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
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
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
