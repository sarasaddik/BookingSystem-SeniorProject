import React from 'react';
import Form from 'react-bootstrap/Form';
import "./Footer.css";
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

function Contactus() {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_v7qd2wu', 'template_xd5ld1f', e.target, 'E3kiHMMD0TDkV48RZ')
    .then(res=>{
        console.log(res.text);
    }, (error)=>{
        console.log(error.text);
    });
    e.target.reset();
}
  return (
    <div className='col-md-4'>
    <h6>Contact Us</h6>
    <hr/>
    <div>
        <form className='row' onSubmit={sendEmail}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="name@example.com" />
    <Form.Text className="text-muted">
       We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Message</Form.Label>
   <Form.Control as="textarea" name='message' rows={2} />
   </Form.Group>

   <div className="d-grid gap-2">
<Button variant="primary" type='submit' value="Send" > Send </Button> </div>
      
</form>
  </div>
</div>
  );
}

export default Contactus;