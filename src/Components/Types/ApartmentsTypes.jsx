import "./Types.css"
import CardTypes from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, {useState, useEffect} from "react";
import Axios from 'axios';

function Apartment_Types() {

  const[cityList, setCityList] = useState([]);


  useEffect(() => {
    Axios.get(`http://localhost:8800/types/apartment`).then((response) =>{
      setCityList(response.data)
      console.log(response)
    })
   
},[0]);

return(
  <>

{cityList.map((val,key)=>{
  return(
    <div className="searchItem" key={key}>
    <img
      src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
      alt=""
      className="siImg"
    />
    <div className="siDesc">
      <h1 className="siTitle">{val.cityName} , {val.Type} </h1>
      <h5 className="siName"><b>{val.Name}</b></h5>
      <span className="siTaxiOp">Free airport taxi</span>
      <span className="siSubtitle">
        {val.Location}
      </span>
      <span className="siFeatures">
   <div> {val.roomsNumber}. </div>
  <div>  {val.Desc} </div>
  </span>
      {/* <span className="siFeatures">
        {val.Desc}
     </span>
     <span>{val.roomsNumber} Rooms</span> */}
    </div>
    <div className="siDetails">
      <div className="siRating">
        <span>{val.Review}</span>
        <button>8.9</button>
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">{val.Price}$</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        <button className="siCheckButton">See availability</button>
      </div> 
    </div>
  </div>
 
);
})}
</>
  )
};
 

  export default Apartment_Types;