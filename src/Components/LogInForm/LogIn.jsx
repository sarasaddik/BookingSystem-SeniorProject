import React from "react";
import "./LogIn.css";
import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom"
import emailjs from 'emailjs-com';


const LogInForm = () => (
  
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

      const myStyle={
        backgroundImage: 
 "url('https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBib29raW5nfGVufDB8fDB8fHww&w=1000&q=80')",
         height:'100vh',
        // marginTop:'-70px',
        // fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

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

  const navigate = useNavigate()

      const handleSign = () => {
        navigate("/Home")

      }
      

      return (
        <div style={myStyle}>
          <div className="headerName" style={{color: "white"}}>
          <h1>Welcome to Sara Booking</h1>
          </div>
            <div className="allInput"  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
      }}>
        <form onSubmit={sendEmail}>
          <div style={{color: "white"}}>
            Sign in please...
          </div>
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
          <div className="button1">
          <button id="sign" type="submit" disabled={isSubmitting}>
            Sign in...
          </button> </div>
            <div>
              <div>

                
              </div>
            </div>
          <div className="button2">
          <button id="cancel" onClick={handleSign}>
            Cancel
          </button> </div>
        </form>
        </div>
        </div>
      );
    }}
  </Formik>
  
);

export default LogInForm;
