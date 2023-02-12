import React from 'react';
import "./Home.css";
import {useState} from 'react'
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'


function Searchh() {

    const[destination, setDestination] = useState("")
    const[openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ]);
      const[openOptions, setOpenOptions] = useState(false);
      const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
      });

  return (

    <div className="header"> 
    <div className= "headerContainer" > 
    <div className="headerSearch">
            <div className="headerSearchItem">
                <input 
                   type="text"
                   placeholder="where are you going?"
                   className="headerSearchInput"
                   onChange={e=>setDestination(e.target.value)}
                   />
            </div>
            <div className="headerSearchItem">
                <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
                {openDate && ( <DateRange
                 editableDateInputs={true}
                 onChange={item => setDate([item.selection])}
                 moveRangeOnFirstSelection={false}
                 ranges={date}
                 className="date"
                 minDate={new Date()}
            />)}
            <div className="headerSearchItem">
                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">2 adults</span>

            </div>
            </div>
            <div className="headerSearchItem">
                <button className="headerBtn" > Search </button>
            </div>
            </div>
            
            </div>
            </div>
  );
}

export default Searchh;