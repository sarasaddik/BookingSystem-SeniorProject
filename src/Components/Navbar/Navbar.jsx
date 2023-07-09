import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Example from "../LogInForm/Modal"
import "./Navbar.css";

function NavBar() {

  return (
    
    <Navbar className="navbarColor" variant="dark">
    <Container>
      <Navbar.Brand href="#home" >Sara Booking</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#book">Book</Nav.Link>
        <Nav.Link href="#aboutus">About Us</Nav.Link>
        <Nav.Link href="#service">Services</Nav.Link>
        <Nav.Link href="#offers">Offers</Nav.Link>
        <Nav.Link href="#contactus">Contact us</Nav.Link>

        {/* <div className="login">
        <Nav.Link href="#LogIn" > <Example/></Nav.Link>
        </div> */}
      </Nav>
        {/* <Nav.Link className="login" href="#Register" > <Example/></Nav.Link> */}
    </Container>
    
  </Navbar>
  )}
export default NavBar;