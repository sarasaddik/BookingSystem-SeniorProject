import React from 'react' ;
// import {Link} from "react-router-dom" ;
import { HashLink as Link} from 'react-router-hash-link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "./Footer.css";

function Footerup() {
    return(

        <section className='section footer bg-dark text-white me-auto'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 text-white'>
                        <h6>Sara Booking</h6>
                        <hr/>
                        <div> <Link to='#book' smooth>Book</Link> </div>
                        <div> <Link to="#aboutus">About Us</Link> </div>
                        <div> <Link to="">Log in</Link> </div>
                        <div> <Link to="">Register</Link> </div>
                        <div> <Link to="#service">Services</Link> </div>

                    </div>
                    <div className='col-md-4'>
                        <h6>Social Media</h6>
                        <hr/>
                        <div> <Link to="">LinkedIn</Link>  </div>
                        <div> <Link to="/">GitHub</Link>  </div>
                        <div> <Link to="/">Facebook</Link>  </div>
                        <div> <Link to="/">Instagram</Link>  </div>

                    </div>
                    <div className='col-md-4'>
                        <h6>Contact Us</h6>
                        <hr/>
                        <div>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                        <Form.Text className="text-muted">
                           We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message</Form.Label>
                       <Form.Control as="textarea" rows={2} />
                       </Form.Group>

                       <div className="d-grid gap-2">
                    <Button variant="primary"> send </Button> </div>
                          

                      </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Footerup;