import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from '../../Components/Navbar/NavbarMinimise';
import Footerup from "../../Components/Footer/FooterMinimise"; 

import Contactus from "../Footer/ContactUs";

import Profile from "./Images/profile.jpg";

export default function AboutUsMax() {
  return (
    <>
    
      <div>
      <NavBar/>
      </div>
    <Container>
      <div style={{marginTop: '40px'}}>
        <h1>Who are we?</h1>
      </div>
    <div style={ {marginTop: '50px' }}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Profile} />
      {/* <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body> */}
    </Card>
    </div>
    <div style={{marginTop: '100px'}}>
      <h1>
        <p> <b>I am Sara Saddik, the owner of this website. </b> </p>
      <b> <p> I'm a graduate student in department of Computer Science at AUCE; </p>
        <p>This is my senior project which is about Booking rooms, apartments or hotels.</p>
        <p>The high demand for residential reservation from locals and tourists,
           which is accompanied by numerous problems such as the authentication and quality of service,
            my project “Sara Booking” is a website with flexible Graphical User Interface (GUI) design
             that provides a link between homeowners and those who want to rent them.
              It provides also different services as a result of personal effort like:
               taxi service and the tourists offer. </p> </b> </h1>
        </div>
     
    {/* <div  style={{
        position: 'relative', left: '30%'
    }}>
    <Contactus />
    </div> */}
    </Container>
    <Footerup/>
    </>

  );
}