import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik } from "formik";
import Form from 'react-bootstrap/Form';
// import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import emailjs from 'emailjs-com';

import "./LogIn.css"

const Example=()=> (

  <Formik id='LogIn'
  initialValues={{ email: "", password: "" }}
  onSubmit={(values, { setSubmitting }) => {
    setTimeout(() => {
      console.log("Logging in", values);
      setSubmitting(false);
    }, 500);
  }}
  
  validationSchema={Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number.")
  })}
>
  {props => {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit
    } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j8lfohl', 'template_vdm427k', e.target, 'E3kiHMMD0TDkV48RZ')
    .then(res=>{
        console.log(res.text);
    }, (error)=>{
        console.log(error.text);
    });
    e.target.reset();
}

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        LogIn
      </Button>

      <Modal show={show} onHide={handleClose}>

      <form onSubmit={sendEmail}>
      <Modal.Header closeButton>
          <Modal.Title>Sign in or create an account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          </Modal.Body>
          <Modal.Footer>
          <button type="submit" disabled={isSubmitting} 
          onClick={handleClose}
          >
            Sign in
          </button>
          </Modal.Footer>
        </form>
      </Modal>
      
    </>
    
  );
} }
</Formik>
);

export default Example;

