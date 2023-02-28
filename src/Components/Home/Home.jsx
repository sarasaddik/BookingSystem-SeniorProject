import React from "react";
import Carousell from "./Carousel";
import Searchh from "./Search";
import About_us from "./AboutUs";
import Servicess from "./Services";
import Footerup from "../../Components/Footer/FooterUp"; 
import PropertyList from "./PropertyType";
import Offerss from "./Offers";
import NavBar from '../../Components/Navbar/Navbar';


// import Footer from "../../Components/Footer/Footer"; 


export default function Home() {
    return (
        <>
        <NavBar/>
        <Carousell/>
        <Searchh />
        <About_us/>
        <PropertyList/>
        <Servicess/>
        <Offerss/>
        {/* <Footer/> */}
        <Footerup/>


        </>
    )
}