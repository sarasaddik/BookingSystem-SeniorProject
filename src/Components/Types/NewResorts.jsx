import React, {useState, useEffect} from "react";
import Axios from 'axios';
import "./Types.css"
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';

    const newResorts = () => {
     

      const[cityList, setCityList] = useState([]);
      const [newBook, setNewBook] = useState('');
      const[image,setImage] = useState('');
     
      useEffect(() => {
           
        // Axios.get(`http://localhost:8800/types/newImages/${data.idimages}`).then((response) =>{
        //       for(let i=0; i<=response.data.length;i++){
          //     console.log(response.data)
          //     console.log("hii")
          //   }
          //   })  
          
          Axios.get(`http://localhost:8800/types/newResorts`).then((response) =>{
            setCityList(response.data)
            //console.log(response.data[0].image)
            // setImage(response.data)
            //console.log(`response.data[i].image = ${response.data[i].image}`)
          //}
            })
          
          },[0])
          
          



        return(
          <>

     {cityList.map((val,key)=>{



const bookFunction = (idCityy) => {
  const check = val.Reserved;

  if(check=='book'){
    alert('Your selection is booked by another guest, please choose another one, Thank you')
  }

  else{

  Axios.put("http://localhost:8800/update", {idCityy: idCityy}).then((response)=>{
    alert('Your room is reserved successfully. For cancellation please contact us, Thank you')
  })
  window.location.reload();
}
}


      return (
        <>
        <div className="searchItem" key={key}>
        <div className="siImg">
        <Carousel>
      <Carousel.Item>
        {console.log(val.image)}
        <img
          className="d-block w-100"
          src={`http://localhost:8800/images/${val.image}`}
          alt="First slide"
          />
          </Carousel.Item>
          </Carousel>
          </div>

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
        
       </> )
     }
       )
      } 
      </>
        )}
 
 export default newResorts;
    