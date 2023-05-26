import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react'
import React, { useState } from 'react'

const Book = () => {

const {id} = useParams();
const [reserved, setReserved] = useState('') ;

useEffect(()=> {
  axios.get('http://localhost:8800/edit/'+id)
  .then(res=> {
    setReserved(res.data[0].Reserved);
  })
  .catch(err=>console.log(err));
}, [])

const navigate = useNavigate();

const handleSubmit = () => {
  
  axios.put('http://localhost:8800/update/'+id, {reserved})
  .then(res => {
    if(res.data.updated){
    navigate('/Hotels')
    }

  })
  .catch(err=>{
    console.log(err)
  })
}


  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h2> Are you sure you want to book it? If yes, please type booked</h2>
          <div>
          <label>Type here</label>
          <input type='text' placeholder='booked' value={reserved} 
          onChange={e=>setReserved(e.target.value)}/>
          </div>
          <button>Done</button>
        </form>
      </div>
    </div>
     
 

   );
 }
 export default Book;
                // <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                //     <p>Are you sure you want to book it</p>
                //   <Button onClick={handleSubmit}>YES</Button>
                // </Box>

