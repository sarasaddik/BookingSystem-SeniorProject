import React from 'react';
import {useState} from 'react'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import {useNavigate} from "react-router-dom"
import axios from 'axios';

const MyProperty = () => {

    const search =()=> {
        const query = document.getElementById('searchInput').value.trim();
   
        // Make an API call to the backend
        axios.get(`/search?query=${query}`)
          .then(response => {
            // Handle the response and display the results
            displayResults(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }
   
      const displayResults = (results) => {
        const searchResults = document.getElementById('searchResults');
        searchResults.innerHTML = '';
   
        // Loop through the results and add them to the DOM
        results.forEach(result => {
          const item = document.createElement('div');
          item.textContent = result;
          searchResults.appendChild(item);
        });
      }


    
    return(
        <div>
            <div>

               <input type='text'
               placeholder='enter'
               id="searchInput"
            />
            </div>
            <div>
                <button onClick={search}>Search</button>
            </div>
            <div id="searchResults"></div>
        </div>
    )
}

export default MyProperty;