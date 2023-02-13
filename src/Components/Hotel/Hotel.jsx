import React from "react";
import { Navbar } from "react-bootstrap";
import Hotel1 from "./Images/Hotel1.jpg";


function Hotell() {
    return (
      <>
      <Navbar/>

  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src={Hotel1} alt="Card image cap"> </img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</>
)}

  export default Hotell;