import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function AddProperty() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        rooms: yup.string().required(),
        lastName: yup.string().required(),
        username: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        zip: yup.string().required(),
        file: yup.mixed().required(),
        terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
      });


    const [name, setname] = useState("");
    const [nbr, setnbr] = useState("");

    const addLogin = () => {

      axios.post(`http://localhost:8800/addprp`, {
        name: name,
      }).then(() =>{
        console.log("SUCCESS")
      })

      axios.post(`http://localhost:8800/addprpp`, {
        nbr: nbr,
      }).then(() =>{
        console.log("SUCCESS twice")
      })
    }
  
  
    return (
        <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
            rooms: '',
          lastName: '',
          username: '',
          city: '',
          state: '',
          zip: '',
          file: null,
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (

          <Form noValidate onSubmit={handleSubmit}>

            <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>roomsNumber</Form.Label>
              <Form.Control
                type="text"
                placeholder="rooms"
                name="rooms"
                value={values.rooms}
                onChange={handleChange}
                isInvalid={!!errors.rooms}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.rooms}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>




            <Button type="submit" >Submit form</Button>
          </Form>
        )}
      </Formik>
    );
  }