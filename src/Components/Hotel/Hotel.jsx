import React, {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';

function Hotell() {

  const[cityList, setCityList] = useState([]);
  const {state} = useLocation();

  useEffect(() => {
      Axios.get(`http://localhost:8800/cities/${state.destination}`).then((response) =>{
        setCityList(response.data)
        console.log(state)
      })
     
  },[0]);

    return (
      <>
      {cityList.map((val,key)=>{
        return(
      <Row xs={1} md={2} className="g-4 container" >
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card key={key}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{val.Name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{val.cityName}, {val.Type}</Card.Subtitle>
              <Card.Text>
                {val.Desc}
              </Card.Text>
              <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        )})}
</>
)}

  export default Hotell;