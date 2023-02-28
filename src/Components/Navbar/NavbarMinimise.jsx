import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";

function NavBarMin() {
  return (
    
    <Navbar className="navbarColor" variant="dark">
    <Container>
      <Navbar.Brand href="#home" >Sara Booking</Navbar.Brand>
    </Container>
  </Navbar>
  )}
export default NavBarMin;