
import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';



import {CallBar,Navbar,Menu, Footer} from '../components/index';
const Menu_page = () => {
   

  
  return (
    <div className=" z-0 bg-primary">
    <div className="">
       <CallBar/>
        <Navbar/>
        <Menu/>
        <Footer/>


</div>

  </div>
  );
}

export default Menu_page;
