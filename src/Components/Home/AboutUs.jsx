import React from 'react';
import "./Home.css";
import {useNavigate} from "react-router-dom"


function About_us() {


    const navigate = useNavigate()

    const goToAbout = () => {
      navigate("/about")
    }

    return(

        
            <section className='section' id='aboutus'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h3 className='main-heading'>About Us</h3>
                            <div className='underline mx-auto'></div>
                            <p>
                                paragraph
                                paragraph
                                paragraph
                            </p>
                            {/* <Link to="/about" className="btn btn-warning shadow">Read More</Link> */}
                           <button onClick={goToAbout}>Read More </button>

                        </div>
                    </div>
                </div>
            </section>
        


    )

}

export default About_us;