import React from 'react' ;
// import {Link} from "react-router-dom" ;
import { HashLink as Link} from 'react-router-hash-link';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

import "./Footer.css";

const Footerup=() => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_v7qd2wu', 'template_xd5ld1f', e.target, 'E3kiHMMD0TDkV48RZ')
        .then(res=>{
            console.log(res.text);
        }, (error)=>{
            console.log(error.text);
        });
        e.target.reset();
    }
    return(

        <section className='section footer bg-dark text-white me-auto' id='contactus'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 text-white'>
                        <h6>Sara Booking</h6>
                        <hr/>
                        <div> <Link to='#book' smooth>Book</Link> </div>
                        <div> <Link to="#aboutus">About Us</Link> </div>
                        <div> <Link to="">Log in</Link> </div>
                        <div> <Link to="#service">Services</Link> </div>
                        <div> <Link to="#offers">Offers</Link> </div>

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
                            <form className='row' onSubmit={sendEmail}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="name@example.com" />
                        <Form.Text className="text-muted">
                           We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message</Form.Label>
                       <Form.Control as="textarea" name='message' rows={2} />
                       </Form.Group>

                       <div className="d-grid gap-2">
                    <Button variant="primary" type='submit' value="Send" > send </Button> </div>
                          
                    </form>
                      </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Footerup;