import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
 // import Footerup from "./Components/Footer/FooterUp";
import Home from "./Components/Home/Home";
import Hotell from "./Components/Hotel/Hotel";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footerup from "./Components/Footer/FooterUp";

function App() {
  return (
    <div>
      <NavBar/>
   
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<Hotell/>}/>
        <Route path="/hotels/:id" element={<xx/>}/>
      </Routes>
    </BrowserRouter>
    </div>
 
 );
}

export default App;
