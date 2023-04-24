import React, {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';
import NavBarMin from "../Navbar/NavbarMinimise";
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';


function Hotell() {

  const[cityList, setCityList] = useState([]);
  const {state} = useLocation();

  useEffect(() => {
      Axios.get(`http://localhost:8800/cities/${state.destination}`).then((response) =>{
        setCityList(response.data)
        console.log(state)
      })
     
  },[0]);

  return(

   
    <>



<NavBarMin/>

{cityList.map((val,key)=>{

return (
  <div className="searchItem" key={key}>
     <div className="siImg">
  <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={val.Images} 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
           alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    {/* <img
      src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
      alt=""
      className="siImg"
    /> */}
    <div className="siDesc">
      <h1 className="siTitle">{val.cityName} , {val.Type} </h1>
      <h5 className="siName"><b>{val.Name}</b></h5>
      <span className="siTaxiOp">Free airport taxi</span>
      <span className="siSubtitle">
        {val.Location}
      </span>
      <span className="siFeatures">
   <div> {val.roomsNumber} </div>
  </span>
  <div>
            <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>See more...</Accordion.Header>
        <Accordion.Body>
        <div>  {val.Desc} </div>

        <div> {val.MoreDesc} </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </div>
      {/* <span className="siFeatures">
        {val.Desc}
     </span>
     <span>{val.roomsNumber} Rooms</span> */}
    </div>
    <div className="siDetails">
      <div className="siRating">
        <span>{val.Review}</span>
        <button>{val.View}</button>
      </div>
      <div className="siDetailTexts">
        <span>{val.Reserved}</span>
        <span className="siPrice">{val.Price}$ per night</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        <button className="siCheckButton">Book Now</button>
      </div> 
    </div>
  </div>
 
);
})}
</>
  )
};


  export default Hotell;