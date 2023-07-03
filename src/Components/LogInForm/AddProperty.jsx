import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function AddProperty() {


  const myStyle={
    backgroundImage: 
"url('https://cdn.wallpapersafari.com/66/32/g6WHKt.jpg')",
     height:'100vh',
    // marginTop:'-70px',
    // fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

    const { Formik } = formik;

    const schema = yup.object().shape({
      Cityname: yup.string().required(),
      types: yup.string().required(),
      mainName: yup.string().required(),
      rooms: yup.string().required(),
      Location: yup.string().required(),
      Review: yup.string().required(),
      Price: yup.string().required(),
      Desc: yup.string().required(),
      moreDesc: yup.string().required(),
      View:yup.string().required(),
        file: yup.mixed().required(),
        terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
      });


    const [cityname, setcityName] = useState("");
    const [types, settypes] = useState("");
    const [mainName,setmainName] = useState("");
    const [rooms,setrooms] = useState("");
    const [location,setLocation] = useState("");
    const [review,setreview] = useState("");
    const [price,setprice] = useState("");
    const [desc,setdesc] = useState("");
    const [moredesc,setmoredesc] = useState("");
    const [view,setView] = useState("");
    const [file, setFile] = useState();
    const[owner, setOwner] = useState([]);

    const addLogin = () => {

  const formdata = new FormData();
  formdata.append('image', file);
  axios.post(`http://localhost:8800/addImage`, formdata)
    .then(res => {
      if (res.data.Status === "Success") { 
        console.log("Succeeded image");
      } else {
        console.log("Failed");
      }
    })
    .catch(err => console.log(err));

      // axios.post(`http://localhost:8800/addprp`, {
      //   rooms:rooms,
      //   location:location,
      //   review:review,
      //   price:price,
      //   desc:desc,
      //   moredesc:moredesc,
      //   view:view,
      //   cityname: cityname,
      //   types:types,
      // }).then(() =>{
      //   console.log("SUCCESS")
      // })

      // axios.post(`http://localhost:8800/addprpp`, {
      //   cityname: cityname,
      //   types:types,
      //   mainName:mainName,
      // }).then(() =>{
      //   console.log("SUCCESS twice")
      // })
    }

    useEffect(() => {
        
        axios.get(`http://localhost:8800/owner`).then((response) =>{
          setOwner(response.data)
          
          })
        
        },[0])
    
    return (
  
          <>
  
          {owner.map((val,key)=>{

            return(
              <>
    <h1>Owner: {val.Username} </h1>
    
    </>
            )
          }
          )
        }
    
        <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          Cityname: '',
          types: '',
          mainName: '',
          rooms: '',
          Location: '',
          Review: '',
          Price:'',
          Desc:'',
          moreDesc:'',
          View:'',
          file: null,
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (


          <Form noValidate onSubmit={handleSubmit} style={myStyle}
          >

            <Row className="mb-3">

            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>City name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cityname"
                name="Cityname"
                value={values.Cityname}
                onChangeCapture={handleChange}
                isInvalid={!!errors.Cityname}
                onChange={(event) =>{
                  setcityName(event.target.value);
                }
              }
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.Cityname}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>Type of property</Form.Label>
              <Form.Control
                type="text"
                placeholder="types"
                name="types"
                value={values.types}
                onChangeCapture={handleChange}
                isInvalid={!!errors.types}
                onChange={(event) =>{
                  settypes(event.target.value);
                }
              }
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.types}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="5"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>Name of property</Form.Label>
              <Form.Control
                type="text"
                placeholder="Main name"
                name="mainName"
                value={values.mainName}
                onChangeCapture={handleChange}
                isInvalid={!!errors.mainName}
                onChange={(event) => {
                  setmainName(event.target.value)
                }}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.mainName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="7"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>Description of rooms (size and number)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description of rooms"
                name="rooms"
                value={values.rooms}
                onChangeCapture={handleChange}
                isInvalid={!!errors.rooms}
                onChange={(event)=>{
                  setrooms(event.target.value);
                }}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.rooms}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>Location </Form.Label>
              <Form.Control
                type="text"
                placeholder="Location"
                name="Location"
                value={values.Location}
                onChangeCapture={handleChange}
                isInvalid={!!errors.Location}
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.Location}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>Review (good, fabulous, ...) </Form.Label>
              <Form.Control
                type="text"
                placeholder="Review"
                name="Review"
                value={values.Review}
                onChangeCapture={handleChange}
                isInvalid={!!errors.Review}
                onChange={(event)=>{
                  setreview(event.target.value);
                }}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.Review}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>Price </Form.Label>
              <Form.Control
                type="number"
                placeholder="price in $"
                name="Price"
                value={values.Price}
                onChangeCapture={handleChange}
                isInvalid={!!errors.Price}
                onChange={(event)=>{
                  setprice(event.target.value);
                }}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.Price}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>Description of the property </Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                name="Desc"
                value={values.Desc}
                onChangeCapture={handleChange}
                isInvalid={!!errors.Desc}
                onChange={(event)=>{
                  setdesc(event.target.value)
                }}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.Desc}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>More description </Form.Label>
              <Form.Control
                type="text"
                placeholder="More..."
                name="moreDesc"
                value={values.moreDesc}
                onChangeCapture={handleChange}
                isInvalid={!!errors.moreDesc}
                onChange={(event)=>{
                  setmoredesc(event.target.value);
                }}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.moreDesc}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label>View </Form.Label>
              <Form.Control
                type="text"
                placeholder="View"
                name="View"
                value={values.View}
                onChangeCapture={handleChange}
                isInvalid={!!errors.View}
                onChange={(event)=>{
                  setView(event.target.value);
                }}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.View}
              </Form.Control.Feedback>
            </Form.Group>

          </Row>

          <input type="file" onChange={(event) => {
            setFile(event.target.files[0])

          }}
          />

            <Button type="submit" onClick={addLogin}>Submit form</Button>
          </Form>
        )}
      </Formik>
    );
    </>
        
    )

        }
  