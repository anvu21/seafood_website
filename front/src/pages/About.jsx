
import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';



import {CallBar,Navbar, Footer, Who,FAQ, Get_in_touch} from '../components/index';
const About = () => {
   

  
  return (
    <div className=" z-0 bg-primary">
    <div className="">
       <CallBar/>
        <Navbar/>
        <Who/>
        
        <FAQ/>
        <Get_in_touch/>
        <Footer/>


</div>

  </div>
  );
}

export default About;
