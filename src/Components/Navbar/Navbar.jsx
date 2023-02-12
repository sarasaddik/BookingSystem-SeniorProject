import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";

function NavBar() {
  return (
    <Navbar className="navbarColor" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Sara Booking</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#">Book</Nav.Link>
        <Nav.Link href="#">About Us</Nav.Link>
        <Nav.Link href="#">Log in</Nav.Link>
        <Nav.Link href="#">Register</Nav.Link>
        <Nav.Link href="#">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )}
export default NavBar;