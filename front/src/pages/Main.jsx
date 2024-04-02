
import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';



import {Hero, Offer,CallBar,Navbar, Best_food,Quality,Testimoni, FAQ, Footer} from '../components/index';
const Main = () => {
   

  
  return (
    <div className=" z-0 bg-primary">
    <div className="">
       <CallBar/>
        <Navbar/>
        <Hero/>
        <Offer/>
        <Best_food/>
        <Quality/>
        <Testimoni/>
        <FAQ/>
        <Footer/>


</div>

  </div>
  );
}

export default Main;
