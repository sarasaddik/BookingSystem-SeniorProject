import React from 'react';
import "./Home.css";
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import {useNavigate} from "react-router-dom"


function Searchh() {

    const[destination, setDestination] = useState("")

      const navigate = useNavigate()

      const handleSearch = () => {
        navigate("/cities", {state: {destination}})       

      }

  return (

    <div className="header" id='book'> 
    <div className= "headerContainer" > 
    <div className="headerSearch">
            <div className="headerSearchItem">
                <input 
                   type="text"
                   placeholder="where are you going?"
                   className="headerSearchInput"
                   hint="For example, flowers or used cars"
                   onChange={e=>setDestination(e.target.value)}
                   />
    <span id='textExample2' className='form-text'>
            Beirut, Koura, Jbeil, Batroun, Farayya.
          </span>
            </div>
                <button className="headerBtn" onClick={handleSearch}> Search </button>
            </div>
            </div>
            
            </div>
   
  );
}

export default Searchh;