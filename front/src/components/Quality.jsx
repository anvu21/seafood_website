import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {styles} from '../style';
import {icon_map,icon_star} from './assets'

const Quality = () => {
 
  
  

  return (
    
    <div className="py-12 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Best Seafood To Your Customers</h2>
        <p className="max-w-7xl mx-auto">
          Partner with Seafood Center to access a wide range of high-quality raw and live seafood products at wholesale prices.
          Our commitment to freshness and sustainability ensures that your business can offer the best seafood to your customers.
        </p>
      </div>
      <div className="flex justify-center space-x-6">
        <div className="max-w-sm p-6  rounded-lg shadow-md">
          <img src={icon_star} alt="Quality" className="w-12 h-12 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-3 text-center">Quality</h3>
          <p className="text-center">
            Source the freshest seafood for your restaurant or retail establishment directly from Seafood Center.
          </p>
        </div>
        <div className="max-w-sm p-6 rounded-lg shadow-md">
          <img src={icon_map} alt="Local & Punctual" className="w-12 h-12 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-3 text-center">Local & Punctual</h3>
          <p className="text-center">
            Count on Seafood Center for consistent supply and timely delivery of your wholesale seafood orders.
          </p>
        </div>
        <div className="max-w-sm p-6  rounded-lg shadow-md">
          <img src={icon_star} alt="Quality" className="w-12 h-12 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-3 text-center">Quality</h3>
          <p className="text-center">
            Source the freshest seafood for your restaurant or retail establishment directly from Seafood Center.
          </p>
        </div>
      </div>
      <div className="text-center mt-12">
        <button className="bg-custom-blue text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors">
          Learn More
        </button>
      </div>
    </div>


  )
}

export default Quality