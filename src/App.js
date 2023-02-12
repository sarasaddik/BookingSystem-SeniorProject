import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
