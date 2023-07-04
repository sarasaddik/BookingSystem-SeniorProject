import React, {useState, useEffect} from "react";
import Axios from 'axios';
import "./Types.css"
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import NavBarMin from "../Navbar/NavbarMinimise";
import Footerup from "../../Components/Footer/FooterUp"; 
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'


    const Hotel_Types = () => {
     

      const[cityList, setCityList] = useState([]);
      const [newBook, setNewBook] = useState('');

      useEffect(() => {
            Axios.get(`http://localhost:8800/types/hotel`).then((response) =>{
              setCityList(response.data)
              console.log(response)
            })
           
        },[0])

        return(
          <>

          <NavBarMin/>

     {cityList.map((val,key)=>{

const bookFunction = (id) => {
  const check = val.Reserved;

  if(check=='book'){
    alert('Your selection is booked by another guest, please choose another one, Thank you')
  }

  else{

  Axios.put("http://localhost:8800/update", {id: id}).then((response)=>{
    alert('Your room is reserved successfully. For cancellation please contact us, Thank you')
  })
  window.location.reload();
}
}


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
          src={val.Images2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={val.Images3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={val.Images4}
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
          src={val.Images5}
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
          src={val.Images6}
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
          src={val.Images7}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
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
            <h1 className="siTitle">{val.cityyName} , {val.type} </h1>
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
            
              <span className="siPrice"> {val.Price}$/night</span>
              <span className="siTaxOp">Includes taxes and fees</span>              
      
              <button onClick={()=>{bookFunction(val.idCityy)}}>Book Now</button>
             
               
            </div> 
          </div>
        </div>
        
      );
    })}
    <Footerup/>
         </>
        )
    };
 
 export default Hotel_Types;
    

    {/* //   <Row xs={1} md={2} className="g-4 container" >
    //   {Array.from({ length: 1 }).map((_, idx) => (
    //     <Col>
    //       <Main key={key}>
    //         <Main.Img variant="top" src="holder.js/100px160" />
    //         <Main.Body>
    //           <Main.Title>{val.Name}</Main.Title>
    //           <Main.Subtitle className="mb-2 text-muted">{val.cityName}, {val.Type}</Main.Subtitle>
    //           <Main.Text>
    //             {val.Desc}
    //           </Main.Text>
    //           <Main.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Main.Footer>
    //         </Main.Body>
    //       </Main>
    //     </Col>
    //   ))}
    // </Row> */}
      