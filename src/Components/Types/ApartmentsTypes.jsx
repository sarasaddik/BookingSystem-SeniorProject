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
      <Row xs={1} md={2} className="g-4 container" >
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <CardTypes key={key}>
            <CardTypes.Img variant="top" src="holder.js/100px160" />
            <CardTypes.Body>
              <CardTypes.Title>{val.Name}</CardTypes.Title>
              <CardTypes.Subtitle className="mb-2 text-muted">{val.cityName}, {val.Type}</CardTypes.Subtitle>
              <CardTypes.Text>
                {val.Desc}
              </CardTypes.Text>
              <CardTypes.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </CardTypes.Footer>
            </CardTypes.Body>
          </CardTypes>
        </Col>
      ))}
    </Row>
        )})}    
    </>
  )
}
 

  export default Apartment_Types;