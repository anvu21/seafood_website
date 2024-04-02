import React from 'react';
// import your image if you have one
// import ImagePlaceholder from 'path-to-your-image';
import {  market,envelop,phone_call } from './assets';
const Get_in_touch = () => {
    return (
        <div className=" py-6">
        <div className="container mx-auto px-6 flex justify-between items-center  ">
          <div className="flex-1 max-w-lg">
            <h2 className="text-2xl font-bold text-secondary">Get In Touch</h2>
            <p className="text-secondary">
              Seafood Center serves a wide range of locations, providing reliable wholesale services.
            </p>
          </div>
          <div className="flex space-x-4">
            {/* Email */}
            <div className=" max-w-xs flex items-center space-x-2 ">
              <img src={envelop} alt="Email" className="h-6 w-6 " />
              <div className="max-w-xs">
                <h3 className="text-secondary font-bold ">Email</h3>
                <p>wholesale@seafoodcenter.com</p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center space-x-2">
              <img src={phone_call} alt="Phone" className="h-6 w-6" />
              <div className="max-w-xs">
                <h3 className="text-secondary font-bold">Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            {/* Office */}
            <div className="max-w-xs flex items-center space-x-2">
              <img src={market} alt="Office" className="h-6 w-6" />
              <div className="">
                <h3 className="text-secondary font-bold">Office</h3>
                <p>123 Main St, San </p>
                <p>Francisco, CA 94101</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Get_in_touch;
