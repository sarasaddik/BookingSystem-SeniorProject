import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Contactus from "../Footer/ContactUs";

export default function AboutUsMax() {
  return (
    <Container>
      <div >
        <h1>Who are we?</h1>
        <p>
        Hake 3a haliiiiiiiiiiiiiiiiiiiiiiiik
        </p>
      </div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <div  style={{
        position: 'relative', left: '30%'
    }}>
    <Contactus />
    </div>
    </Container>

  );
}