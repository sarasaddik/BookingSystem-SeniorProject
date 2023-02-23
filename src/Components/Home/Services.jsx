import React from 'react';
import "./Home.css";
import Blue from "./Images/Blue.png";

function Servicess() {
    return(
<div>
  <section className='section border-top' id='service'>
  <div className='container'>
      <div className='row'>
          <div className='col-md-12 mb-4 text-center'>
              <h3 className='main-heading'>Our Services</h3>
              <div className='underline mx-auto'></div>
          </div>
              <div className='col-md-4'>
                  <div className='card shadow'>
                      <img src={Blue} className="w-100 border-bottom" alt=" " />
                      <div className='card-body'>
                          <h6>Services 1</h6>
                          <div className='underline'></div>
                          <p>
                            paragraph
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
</section>
</div>
    )
}

export default Servicess;