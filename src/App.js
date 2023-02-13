import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
// import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Hotell from "./Components/Hotel/Hotel";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar/>
      {/* <Home/> */}
   
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
