import { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import {useNavigate} from "react-router-dom"

const Example = () => {
  const [show, setShow] = useState(false);
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [nbr, setnbr] = useState("");
  const [email, setemail] = useState("");
  const [user, setuser] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addUser = () => {
    axios.post(`http://localhost:8800/register`, {
      fName: fName,
      lName: lName,
      nbr: nbr,
      email: email
    }).then(() => {
      console.log("SUCCESS")
    })
  }

  useEffect(() => {
    axios.get(`http://localhost:8800/user`).then((response) => {
      setuser(response.data)
      console.log(response)
    })
  }, [0])

 const navigate = useNavigate();

  const addProp = () => {
    
     navigate("/new");
  }


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Register
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register please</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form  onSubmit={addUser}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter your first name please"
                onChange={(event) => {
                  setfName(event.target.value);
                }} />

              <Form.Label>LastName</Form.Label>
              <Form.Control type="lastname" placeholder="Enter your last name please"
                onChange={(event) => {
                  setlName(event.target.value);
                }} />

              <Form.Label>Phone number</Form.Label>
              <Form.Control type="phone number" placeholder="Enter your phone number "
                onChange={(event) => {
                  setnbr(event.target.value);
                }} />

              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com"
                onChange={(event) => {
                  setemail(event.target.value);
                }} />
            </Form.Group>
            <Button variant="primary" type='Submit' value="Submit">
              register
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <button onClick={addProp} >Add Property </button>
        </Modal.Footer>
      </Modal>
    </>
  )
              
       
  
              
}

export default Example;