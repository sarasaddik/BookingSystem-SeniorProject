import React from "react";
import "./LogIn.css";
import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import emailjs from 'emailjs-com';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom"

const LogInForm = () => {
  
//   <Formik id='LogIn'
//     initialValues={{ email: "", password: "" }}
//     onSubmit={(values, { setSubmitting }) => {
//       setTimeout(() => {
//         console.log("Logging in", values);
//         setSubmitting(false);
//       }, 500);
//     }}
    
//     validationSchema={Yup.object().shape({
//       email: Yup.string()
//         .email()
//         .required("Required"),
//       password: Yup.string()
//         .required("No password provided.")
//         .min(8, "Password is too short - should be 8 chars minimum.")
//         .matches(/(?=.*[0-9])/, "Password must contain a number.")
//     })}
//   >
//  {props => {
//     const {
//       values,
//       touched,
//       errors,
//       isSubmitting,
//       handleChange,
//       handleBlur,
//       handleSubmit
//     } = props;

      const myStyle={
        backgroundImage: 
 "url('https://cdn.wallpapersafari.com/66/32/g6WHKt.jpg')",
         height:'100vh',
        // marginTop:'-70px',
        // fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

//     const sendEmail = (e) => {
//       e.preventDefault();
  
//       emailjs.sendForm('service_j8lfohl', 'template_vdm427k', e.target, 'E3kiHMMD0TDkV48RZ')
//       .then(res=>{
//           console.log(res.text);
//       }, (error)=>{
//           console.log(error.text);
//       });
//       e.target.reset();
//   }

//   const navigate = useNavigate()

//       const handleSign = () => {
//         navigate("/Home")

//       }

//       const [email, setemail] = useState("");
//       const addLogin = (event) => {
//         event.preventDefault();

//     if (email.trim().length == 0) {
//       alert("Please fill your email address")
//     }
//       else{

//         axios.post(`http://localhost:8800/login`, {
//           email: email,
//         }).then(() =>{
//           console.log("SUCCESS")
//         })
//       }
//     }
      

//         <div style={myStyle}>
//           <div className="headerName" style={{color: "white"}}>
//           <h1>Welcome to Sara Booking</h1>
//           </div>
//             <div className="allInput"  style={{
  //         display: 'flex',
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //         height: '70vh',
  //       }}>
  //        <Form onSubmit={sendEmail}>
  //       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  
  //       <Form.Label>Email address</Form.Label>
  //         <Form.Control type="username" placeholder="Enter your email please" name="email"
  //         onChange={(event) =>{
    //           setemail(event.target.value);
    //         }} required />
    
    //         <Form.Label>Password</Form.Label>
    //         <Form.Control type="password" placeholder="Enter your password"
    
    //          />

//       <Button variant="primary" type='Submit' value="Submit"  onClick={addLogin}>
//             Login
//           </Button>
//       </Form.Group>
//           <Button variant="primary" onClick={handleSign}>
//             cancel
//           </Button>
//     </Form>
//         </div>
//         </div>
//       );
//     }}
//   </Formik>


const [usernameReg, setUsernameReg] = useState("");
const [passwordReg, setPasswordReg] = useState("");

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const [loginStatus, setLoginStatus] = useState("")
const [notfound, setnotfound] = useState("")


const register = () => {
  axios.post(`http://localhost:8800/login`, {
    username:usernameReg,
    password: passwordReg
  }).then((response)=>{
    console.log(response)
  })
}

const navigate = useNavigate()

const homePage = () => {
  navigate("/Home")
}

const login = () => {
  axios.post(`http://localhost:8800/sigin`, {
    username:username,
    password: password
  }).then((response)=>{
    if(response.data.message) {
      setnotfound('user not found')
      setTimeout(() => { document.location.reload(); }, 1000);

    } else {
      setLoginStatus('user: ' + response.data[0].username)
    }
  })
}

return (

<div className="allTheForm" 
style={myStyle}
>
  <div className="Login">
    <h1 >Already have an account? Login please</h1>
    <div className="input">
    <input type="text"
     placeholder="Username..." 
    onChange={(e)=>{
      setUsername(e.target.value)
    }}
    />
    <input type="password"
     placeholder="Password..." 
    onChange={(e)=>{
      setPassword(e.target.value)
    }}
    />
    </div>
    </div>
    <div>
    <button onClick={login}>Login</button>
    
  </div>

  <div className="register">
    <h1>Create an account </h1>
    <label>Username</label>
    <input
     type="text"
     onChange={(e)=>{
      setUsernameReg(e.target.value)
    }}
    />
    <label>Password</label>
    <input 
    type="text"
    onChange={(e)=>{
      setPasswordReg(e.target.value)
    }}
    />
    </div>
    <div>
    <button onClick={register}>Register</button>
  </div>


  <h1>{loginStatus}</h1>
   {loginStatus && (
    <Button variant="primary" onClick={homePage}>
        Home
      </Button>
    )}
    <h1>{notfound}</h1>
    </div>
      )
  
      };

export default LogInForm;
