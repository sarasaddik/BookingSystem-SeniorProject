import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import NavBar from './Components/Navbar/Navbar';
 // import Footerup from "./Components/Footer/FooterUp";
import Home from "./Components/Home/Home";
import Hotell from "./Components/Hotel/Hotel";
import LogInForm from "./Components/LogInForm/LogIn";
import Hotel_Types from "./Components/Types/HotelTypes";
import Apartment_Types from "./Components/Types/ApartmentsTypes";
import Resort_Types from "./Components/Types/ResortsTypes";
import Villas_Types from "./Components/Types/VillasTypes";
import AllPlaces from "./Components/MoreDescription/ForAll";

// import Example from "./Components/LogInForm/Modal";


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      
   
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cities" element={<Hotell/>}/>
        <Route path="/Hotels" element={< Hotel_Types/>}/>
        <Route path="/Apartments" element={< Apartment_Types/>}/>
        <Route path="/resorts" element={< Resort_Types/>}/>
        <Route path="/villas" element={< Villas_Types/>}/>
        <Route path="/Description" element={< AllPlaces/>}/>

        <Route path="/hotels/:id" element={<LogInForm/>}/>
      </Routes>
    </BrowserRouter>
    </div>
 
 );
}

export default App;
