import "./Home.css" ;
import React from "react";
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom"
import {useState} from 'react'


const PropertyTypes = () => {

    const[destination, setDestination] = useState("")


    const navigate = useNavigate()

    const Browsing = () => {
      navigate("/types")

    }

    return(

<div>
<section className='section border-top' id='service'>
  <div className='container'>
      <div className='row'>
          <div className='col-md-12 mb-4 text-center'>
              <h3 className='main-heading'>Browse By Property Type</h3>
              <div className='underline mx-auto'></div>
          </div>
              <div className='col-md-3'>
                  <div className='card shadow'>
                  <img src="https://images.skyscrapercenter.com/uploads/Beirut_2016_(ccby-sa)MichalHuniewicz-flickr210126-060138.jpg" alt=""/>
                      <div className='card-body'>
                      <h5> Hotels Type </h5>
                         <Button variant="outline-secondary" onClick={Browsing} >Click To Browse</Button>{' '}

                      </div>
                  </div>
              </div>

              <div className='col-md-3'>
                  <div className='card shadow'>
                  <img src="https://images.skyscrapercenter.com/uploads/Beirut_2016_(ccby-sa)MichalHuniewicz-flickr210126-060138.jpg" alt=""/>
                      <div className='card-body'>
                      <h5> Resorts Type </h5>
                         <Button variant="outline-secondary" onClick={Browsing}>Click To Browse</Button>{' '}

                      </div>
                  </div>
              </div>
              <div className='col-md-3'>
                  <div className='card shadow'>
                  <img src="https://images.skyscrapercenter.com/uploads/Beirut_2016_(ccby-sa)MichalHuniewicz-flickr210126-060138.jpg" alt=""/>
                      <div className='card-body'>
                      <h5> Apartments Type </h5>
                         <Button variant="outline-secondary" onClick={Browsing}>Click To Browse</Button>{' '}

                      </div>
                  </div>
              </div>
              <div className='col-md-3'>
                  <div className='card shadow'>
                  <img src="https://images.skyscrapercenter.com/uploads/Beirut_2016_(ccby-sa)MichalHuniewicz-flickr210126-060138.jpg" alt=""/>
                      <div className='card-body'>
                      <h5> Villas Type </h5>
                         <Button variant="outline-secondary" onClick={Browsing}>Click To Browse</Button>{' '}

                      </div>
                  </div>
              </div>
              
          </div>
      </div>
</section>
</div>

//         <div className="pList">

//             <div className="pListItem"> 
//              <img src="https://images.skyscrapercenter.com/uploads/Beirut_2016_(ccby-sa)MichalHuniewicz-flickr210126-060138.jpg"
//               alt=""
//                className="pListImg" />
//             <div className="pListTitles">
//                 <h1> Hotels </h1>
//                 <h2> 200 hotels </h2>
//             </div>
//     </div>


//     <div className="pListItem"> 
//              <img src="https://images.skyscrapercenter.com/uploads/Beirut_2016_(ccby-sa)MichalHuniewicz-flickr210126-060138.jpg"
//               alt=""
//                className="pListImg" />
//             <div className="pListTitles">
//                 <h1> Apartments </h1>
//                 <h2> 200 hotels </h2>
//             </div>
//     </div>

//     <div className="pListItem"> 
//              <img src="https://images.skyscrapercenter.com/uploads/Beirut_2016_(ccby-sa)MichalHuniewicz-flickr210126-060138.jpg"
//               alt=""
//                className="pListImg" />
//             <div className="pListTitles">
//                 <h1> Resorts </h1>
//                 <h2> 200 hotels </h2>
//             </div>
//     </div>

//     <div className="pListItem"> 
//              <img src="https://images.skyscrapercenter.com/uploads/Beirut_2016_(ccby-sa)MichalHuniewicz-flickr210126-060138.jpg"
//               alt=""
//                className="pListImg" />
//             <div className="pListTitles">
//                 <h1> Villas </h1>
//                 <h2> 200 hotels </h2>
//             </div>
//     </div>

//     <div className="pListItem"> 
//              <img src="https://images.skyscrapercenter.com/uploads/Beirut_2016_(ccby-sa)MichalHuniewicz-flickr210126-060138.jpg"
//               alt=""
//                className="pListImg" />
//             <div className="pListTitles">
//                 <h1> Cabins </h1>
//                 <h2> 200 hotels </h2>
//             </div>
//     </div>
//   </div>

    ) ;
} ;

export default PropertyTypes ;