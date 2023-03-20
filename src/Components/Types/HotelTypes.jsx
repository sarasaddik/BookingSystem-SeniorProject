import React, {useState, useEffect} from "react";
import Axios from 'axios';
import "./Types.css"
import Accordion from 'react-bootstrap/Accordion';


    const Hotel_Types = () => {
     

      const[cityList, setCityList] = useState([]);

      useEffect(() => {
            Axios.get(`http://localhost:8800/types/hotel`).then((response) =>{
              setCityList(response.data)
              console.log(response)
            })
           
        },[0])
        return(
          <>

     {cityList.map((val,key)=>{

      return (
        
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
         <div> {val.roomsNumber} </div>
        <div>  {val.Desc} </div>
        </span>
        <div>
            <Accordion >
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
              <button>8.9</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">{val.Price}$</span>
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
      