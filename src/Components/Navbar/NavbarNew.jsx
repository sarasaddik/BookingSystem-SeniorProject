import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {useNavigate} from "react-router-dom"

import "./Navbar.css";

function NavBarNew() {

  const navigate = useNavigate()

      const backToHome = () => {
        navigate("/Home")
      }

      const myProperties = () => {
        navigate("/MyProperty")
      }
  return (
    
    <Navbar className="navbarColor" variant="dark">
    <Container>
      <Navbar.Brand href="#home" >Sara Booking</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#book" onClick={backToHome}>Home</Nav.Link>
      </Nav>
      <button onClick={myProperties}>My Properties</button>
    </Container>
  </Navbar>
  )}
export default NavBarNew;