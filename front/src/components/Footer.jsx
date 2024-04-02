import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {styles} from '../style';
import {logo_name} from './assets'

const Footer = () => {
//          <img src={logo_name} alt="Quality" className=" mb-4 " />

  return (
    <footer className="bg-gray-100">
      
      <div className="container mx-auto px-4 py-1 flex justify-between items-center border-b border-black">
      <img src={logo_name} alt="Quality" className=" mb-4  w-64 h-auto" />
        <div className="flex space-x-6 font-bold">
          <a href="/about" className="text-[16px] font-bold text-secondary hover:text-black transition-colors">About Us</a>
          <a href="/contact" className="text-[16px] text-secondary hover:text-black transition-colors">Contact Us</a>
          <a href="/faqs" className="text-[16px] text-secondary hover:text-black transition-colors">FAQs</a>
          <a href="/shipping" className="text-[16px] text-secondary hover:text-black transition-colors">Shipping</a>
          <a href="/returns" className="text-[16px] text-secondary hover:text-black transition-colors">Returns</a>
        </div>
      </div>
      {/* Thin black bar */}
      
      {/* Bottom row with copyright and policy links */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <p className="text-sm text-secondary">&copy; 2024 Seafood Center. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="/privacy" className="text-sm text-secondary hover:text-black transition-colors">Privacy Policy</a>
          <a href="/terms" className="text-sm text-secondary hover:text-black transition-colors">Terms and Conditions</a>
          <a href="/cookie" className="text-sm text-secondary hover:text-black transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer