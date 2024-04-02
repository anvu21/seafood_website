import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {styles} from '../style';
import {seafood1,seafood2,seafood3,seafood4,seafood5} from './assets'

const Menu = () => {
 
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // for smoothly scrolling to the top
      });
    };
  

  return (
    <div className='bg-gray-100 mt-36 p-10 py-10 border border-red-500'>
  <div className="container mx-auto my-8 px-4 border border-red-500">
    <h2 className="text-left text-5xl mb-8 pb-1 border border-red-500">Best Selling Seafood</h2>
    <div className="flex justify-between border border-red-500">
      <div className="text-center flex-1 px-2">
        <img src={seafood1} alt="Sockeye Salmon" className="w-full h-auto max-w-xs object-cover rounded-full mb-4 border border-red-500" />
        <h1 className="font-medium text-left  text-2xl  ">Sockeye Salmon</h1>
        <h1 className="font-medium text-left text-2xl  ">$49.99</h1>
        <h1 className="font-medium text-left text-menu_ship">Available To Ship Now</h1>
      </div>
      <div className="text-center flex-1 px-2">
        <img src={seafood2} alt="Pacific King Salmon" className="w-full h-auto max-w-xs object-cover rounded-full mb-4" />
        <h3 className="font-medium  text-left text-2xl">Pacific King Salmon</h3>
        <h1 className="font-medium text-left text-2xl">$49.99</h1>
        <h1 className="font-medium text-left text-menu_ship ">Available To Ship Now</h1>
      </div>
      <div className="text-center flex-1 px-2">
        <img src={seafood3} alt="Alaskan Halibut" className="w-full h-auto max-w-xs object-cover rounded-full mb-4" />
        <h3 className="font-medium  text-left text-2xl">Alaskan Halibut</h3>
        <h1 className="font-medium text-left text-2xl">$49.99</h1>
        <h1 className="font-medium text-left text-red-500">Available To Ship Now</h1>
      </div>
      <div className="text-center flex-1 px-2">
        <img src={seafood4} alt="Chilean Sea Bass" className="w-full h-auto max-w-xs object-cover rounded-full mb-4" />
        <h3 className="font-medium  text-left text-2xl">Chilean Sea Bass</h3>
        <h1 className="font-medium text-left text-2xl">$49.99</h1>
        <h1 className="font-medium text-left text-menu_ship">Available To Ship Now</h1>
      </div>
      <div className="text-center flex-1 px-2">
        <img src={seafood5} alt="Silver (Coho) Salmon" className="w-full h-auto max-w-xs object-cover rounded-full mb-4" />
        <h3 className="font-medium  text-left text-2xl">Silver (Coho) Salmon</h3>
        <h1 className="font-medium text-left text-2xl">$49.99</h1>
        <h1 className="font-medium text-left text-menu_ship">Available To Ship Now</h1>
      </div>
    </div>

    <div className="flex justify-between border border-red-500">
      <div className="text-center flex-1 px-2">
        <img src={seafood1} alt="Sockeye Salmon" className="w-full h-auto max-w-xs object-cover rounded-full mb-4 border border-red-500" />
        <h1 className="font-medium text-left  text-2xl  ">Sockeye Salmon</h1>
        <h1 className="font-medium text-left text-2xl  ">$49.99</h1>
        <h1 className="font-medium text-left text-menu_ship">Available To Ship Now</h1>
      </div>
      <div className="text-center flex-1 px-2">
        <img src={seafood2} alt="Pacific King Salmon" className="w-full h-auto max-w-xs object-cover rounded-full mb-4" />
        <h3 className="font-medium  text-left text-2xl">Pacific King Salmon</h3>
        <h1 className="font-medium text-left text-2xl">$49.99</h1>
        <h1 className="font-medium text-left text-menu_ship">Available To Ship Now</h1>
      </div>
      <div className="text-center flex-1 px-2">
        <img src={seafood3} alt="Alaskan Halibut" className="w-full h-auto max-w-xs object-cover rounded-full mb-4" />
        <h3 className="font-medium  text-left text-2xl">Alaskan Halibut</h3>
        <h1 className="font-medium text-left text-2xl">$49.99</h1>
        <h1 className="font-medium text-left text-red-500">Available To Ship Now</h1>
      </div>
      <div className="text-center flex-1 px-2">
        <img src={seafood4} alt="Chilean Sea Bass" className="w-full h-auto max-w-xs object-cover rounded-full mb-4" />
        <h3 className="font-medium  text-left text-2xl">Chilean Sea Bass</h3>
        <h1 className="font-medium text-left text-2xl">$49.99</h1>
        <h1 className="font-medium text-left text-menu_ship">Available To Ship Now</h1>
      </div>
      <div className="text-center flex-1 px-2">
        <img src={seafood5} alt="Silver (Coho) Salmon" className="w-full h-auto max-w-xs object-cover rounded-full mb-4" />
        <h3 className="font-medium  text-left text-2xl">Silver (Coho) Salmon</h3>
        <h1 className="font-medium text-left text-2xl">$49.99</h1>
        <h1 className="font-medium text-left text-menu_ship">Available To Ship Now</h1>
      </div>
    </div>



    <h2 className="text-left text-5xl mb-8 pb-1 border border-red-500 pt-20">Fresh Seafood</h2>
    <div className="flex justify-between border border-red-500">
      <div className="text-center flex-1 px-2">
        <img src={seafood1} alt="Sockeye Salmon" className="w-full h-auto max-w-xs object-cover rounded-full mb-4 border border-red-500" />
        <h1 className="font-medium text-left  text-2xl  ">Sockeye Salmon</h1>
        <h1 className="font-medium text-left text-2xl  ">$49.99</h1>
        <h1 className="font-medium text-left text-menu_ship">Available To Ship Now</h1>
      </div>
      <div className="text-center flex-1 px-2">
        <img src={seafood2} alt="Pacific King Salmon" className="w-full h-auto max-w-xs object-cover rounded-full mb-4" />
        <h3 className="font-medium  text-left text-2xl">Pacific King Salmon</h3>
        <h1 className="font-medium text-left text-2xl">$49.99</h1>
        <h1 className="font-medium text-left text-menu_ship ">Available To Ship Now</h1>
      </div>
      <div className="text-center flex-1 px-2">
        <img src={seafood3} alt="Alaskan Halibut" className="w-full h-auto max-w-xs object-cover rounded-full mb-4" />
        <h3 className="font-medium  text-left text-2xl">Alaskan Halibut</h3>
        <h1 className="font-medium text-left text-2xl">$49.99</h1>
        <h1 className="font-medium text-left text-red-500">Available To Ship Now</h1>
      </div>
      <div className="text-center flex-1 px-2">
        <img src={seafood4} alt="Chilean Sea Bass" className="w-full h-auto max-w-xs object-cover rounded-full mb-4" />
        <h3 className="font-medium  text-left text-2xl">Chilean Sea Bass</h3>
        <h1 className="font-medium text-left text-2xl">$49.99</h1>
        <h1 className="font-medium text-left text-menu_ship">Available To Ship Now</h1>
      </div>
      <div className="text-center flex-1 px-2">
        <img src={seafood5} alt="Silver (Coho) Salmon" className="w-full h-auto max-w-xs object-cover rounded-full mb-4" />
        <h3 className="font-medium  text-left text-2xl">Silver (Coho) Salmon</h3>
        <h1 className="font-medium text-left text-2xl">$49.99</h1>
        <h1 className="font-medium text-left text-menu_ship">Available To Ship Now</h1>
      </div>
    </div>

    <div className="flex justify-between border border-red-500">
      <div className="text-center flex-1 px-2">
        <img src={seafood1} alt="Sockeye Salmon" className="w-full h-auto max-w-xs object-cover rounded-full mb-4 border border-red-500" />
        <h1 className="font-medium text-left  text-2xl  ">Sockeye Salmon</h1>
        <h1 className="font-medium text-left text-2xl  ">$49.99</h1>
        <h1 className="font-medium text-left text-menu_ship">Available To Ship Now</h1>
      </div>
      <div className="text-center flex-1 px-2">
        <img src={seafood2} alt="Pacific King Salmon" className="w-full h-auto max-w-xs object-cover rounded-full mb-4" />
        <h3 className="font-medium  text-left text-2xl">Pacific King Salmon</h3>
        <h1 className="font-medium text-left text-2xl">$49.99</h1>
        <h1 className="font-medium text-left text-menu_ship">Available To Ship Now</h1>
      </div>
      <div className="text-center flex-1 px-2">
        <img src={seafood3} alt="Alaskan Halibut" className="w-full h-auto max-w-xs object-cover rounded-full mb-4" />
        <h3 className="font-medium  text-left text-2xl">Alaskan Halibut</h3>
        <h1 className="font-medium text-left text-2xl">$49.99</h1>
        <h1 className="font-medium text-left text-red-500">Available To Ship Now</h1>
      </div>
      <div className="text-center flex-1 px-2">
        <img src={seafood4} alt="Chilean Sea Bass" className="w-full h-auto max-w-xs object-cover rounded-full mb-4" />
        <h3 className="font-medium  text-left text-2xl">Chilean Sea Bass</h3>
        <h1 className="font-medium text-left text-2xl">$49.99</h1>
        <h1 className="font-medium text-left text-menu_ship">Available To Ship Now</h1>
      </div>
      <div className="text-center flex-1 px-2">
        <img src={seafood5} alt="Silver (Coho) Salmon" className="w-full h-auto max-w-xs object-cover rounded-full mb-4" />
        <h3 className="font-medium  text-left text-2xl">Silver (Coho) Salmon</h3>
        <h1 className="font-medium text-left text-2xl">$49.99</h1>
        <h1 className="font-medium text-left text-menu_ship">Available To Ship Now</h1>
      </div>
    </div>

    <div className='flex flex-col items-center py-5'>
  <button
    className="bg-blue-300 text-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-blue-400 transition duration-300 ease-in-out"
    onClick={scrollToTop}
    aria-label="Back to top"
  >
    ↑
  </button>
  <span className="text-sm mt-2 font-bold underline">
    Back To the Top
  </span>
</div>


  </div>
  
  

</div>
  )
}

export default Menu