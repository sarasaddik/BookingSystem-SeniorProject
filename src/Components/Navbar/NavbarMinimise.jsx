import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {useNavigate} from "react-router-dom"

import "./Navbar.css";

function NavBarMin() {

  const navigate = useNavigate()

      const backToHome = () => {
        navigate("/Home")
      }
  return (
    
    <Navbar className="navbarColor" variant="dark">
    <Container>
      <Navbar.Brand href="#home" >Sara Booking</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#book" onClick={backToHome}>Home</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )}
export default NavBarMin;