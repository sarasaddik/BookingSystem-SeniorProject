import React from 'react';
import {useState} from 'react'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import {useNavigate} from "react-router-dom"
import axios from 'axios';

const MyProperty = () => {

  const search = ()=>{
    const searchTerm = document.getElementById('search-bar').value;
            axios.get(`http://localhost:8800/search?term=${searchTerm}`)
                .then(response => {
                  displayResults(response.data);
                    console.log(response.data);
                    // Use the response data as needed
                })
                .catch(error => {
                    console.error(error);
                });
  }

  function displayResults(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
  
    for (let i = 0; i < data.length; i++) {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const name = document.createElement('p');
      name.innerText = data[i].Location;
  
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.addEventListener('click', () => {
        const id = data[i].idCityy; // Get the ID of the data
        deleteData(id); // Call the deleteData function passing the ID
      });
  
      card.appendChild(name);
      card.appendChild(deleteButton);
  
      resultsContainer.appendChild(card);
    }
}


const deleteData = (idCityy) => {
  axios
    .delete(`http://localhost:8800/data/${idCityy}`)
    .then(response => {
      console.log(response.data);
      console.log("deleted")
      // Delete operation successful
    })
    .catch(error => {
      console.error(error);
    });
}

    return(
      <div>

      <input id='search-bar' type='text' placeholder='Search'/>

      <button onClick={search}>Search</button>
      <div id='results'> </div> 


      </div>
    )
}

export default MyProperty;