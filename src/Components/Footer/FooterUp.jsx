import React from 'react' ;
// import {Link} from "react-router-dom" ;
import { HashLink as Link} from 'react-router-hash-link';


import "./Footer.css";
import Contactus from './ContactUs';

const Footerup=() => {
    
    return(

        <section className='section footer bg-dark text-white me-auto' id='contactus'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 text-white'>
                        <h6>Sara Booking</h6>
                        <hr/>
                        <div> <Link to='#book' smooth>Book</Link> </div>
                        <div> <Link to="#aboutus">About Us</Link> </div>
                        <div> <Link to="#service">Services</Link> </div>
                        <div> <Link to="#offers">Offers</Link> </div>

                    </div>
                    <div className='col-md-4'>
                        <h6>Social Media</h6>
                        <hr/>
                        <div> <Link to="">LinkedIn</Link>  </div>
                        <div> <Link to="/">GitHub</Link>  </div>
                        <div> Phone number: 71563090 </div>
                        <div> Email: sarasaddik880@gmail.com </div>

                    </div>
                  <Contactus/>
                </div>
            </div>
        </section>


    )
}

export default Footerup;