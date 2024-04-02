import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {styles} from '../style';
import {seafood1,seafood2,seafood3,seafood4,seafood5} from './assets'

const Best_food = () => {
 
  
  

  return (
    <div className='bg-gray-100  p-10 py-10'>
    <div className="  container mx-auto my-8 px-4">
    <h2 className="text-center text-5xl  mb-8 pb-1">Best Selling Seafood</h2>
    <div className="flex justify-center space-x-8">
      <div className="text-center">
        <img src={seafood1} alt="Sockeye Salmon" className="w-40 h-40 object-cover rounded-full mb-4" />
        <h3 className="font-medium">Sockeye Salmon</h3>
      </div>
      <div className="text-center">
        <img src={seafood2} alt="Pacific King Salmon" className="w-40 h-40 object-cover rounded-full mb-4" />
        <h3 className="font-medium">Pacific King Salmon</h3>
      </div>
      <div className="text-center">
        <img src={seafood3} alt="Alaskan Halibut" className="w-40 h-40 object-cover rounded-full mb-4" />
        <h3 className="font-medium">Alaskan Halibut</h3>
      </div>
      <div className="text-center">
        <img src={seafood4} alt="Chilean Sea Bass" className="w-40 h-40 object-cover rounded-full mb-4" />
        <h3 className="font-medium">Chilean Sea Bass</h3>
      </div>
      <div className="text-center">
        <img src={seafood5} alt="Silver (Coho) Salmon" className="w-40 h-40 object-cover rounded-full mb-4" />
        <h3 className="font-medium">Silver (Coho) Salmon</h3>
      </div>
    </div>
  </div>

  </div>
  )
}

export default Best_food