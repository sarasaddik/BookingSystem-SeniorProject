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
  const [IDnumber, setIDnumber] = useState("");
  const [passcode, setPasscode] = useState("");
  const [user, setuser] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // if (myButton) {
    //   myButton.disabled = true;
    // }
    
    
  // const enable = () => {
    //   if (myButton) {
  //   setTimeout(() => {
  //     myButton.disabled = false;
  //   }, 3000);
  //   setTimeout(() => {
  //     window.location.href = "http://localhost:3000/new";;
  //   }, 10000);
  // }
  // }
  
  const myButton = document.getElementById("addProp");
  
  const addUser = () => {
    if(fName.trim().length == 0 || lName.trim().length ==0 || nbr.trim().length ==0 ||
     email.trim().length ==0 || IDnumber.trim().length == 0 || passcode.trim().length==0){
      alert("Please fill all the fields");
      myButton.disabled = true;
    }

    else if(passcode !== 'saraBooking'){
   alert("Please enter the correct passcode")
   myButton.disabled = true;
    }

    else{
    axios.post(`http://localhost:8800/register`, {
      fName: fName,
      lName: lName,
      nbr: nbr,
      email: email,
      IDnumber:IDnumber,
      passcode:passcode
    }).then(() => {
      console.log("SUCCESS");
      myButton.disabled = false; // Enable the button after successful form submission
    }).catch((error) => {
      console.error(error);
      myButton.disabled = true; // Enable the button after error
    });
  }

  myButton.addEventListener("click", () => {
    // Navigate to another page
    window.location.href = "http://localhost:3000/new";
  });

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
        Register to add Property
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register please</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="myForm"  onSubmit={addUser}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label type="text" id='username'>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter your first name please"
                onChange={(event) => {
                  setfName(event.target.value);
                }} />

              <Form.Label type="text" id='lastname'>LastName</Form.Label>
              <Form.Control type="lastname" placeholder="Enter your last name please"
                onChange={(event) => {
                  setlName(event.target.value);
                }} />

              <Form.Label type="number" id='Phone number'>Phone number</Form.Label>
              <Form.Control type="number" placeholder="Enter your phone number "
                onChange={(event) => {
                  setnbr(event.target.value);
                }} />

              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com"
                onChange={(event) => {
                  setemail(event.target.value);
                }} />

              <Form.Label>Passport or ID number</Form.Label>
              <Form.Control type="IDnumber" placeholder="ID number"
                onChange={(event) => {
                  setIDnumber(event.target.value);
                }} />

              <Form.Label type="passcode" id='passcode'>Passcode</Form.Label>
              <Form.Control type="passcode" placeholder="enter the passcode"
              onChange={(event) => {
                setPasscode(event.target.value);
              }}
                 />

            </Form.Group>
            <Button variant="primary" type='Submit' value="Submit" 
            // onClick={enable}
            >
              register
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          
          <button id='addProp'  onClick={addProp} disabled>Add Property </button>
        </Modal.Footer>
      </Modal>
    </>
  )
              
              
}

export default Example;