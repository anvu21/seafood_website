import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {styles} from '../style';
import {icon_fish_1,icon_fish_2,icon_fish_3} from './assets'

const Offer = () => {
 
  
  

  return (
    <div className=" p-10 py-24">
  <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap px-5 border border-red-500">

    {/* Left Half - Text Section */}
    <div className="md:flex-1 flex flex-col justify-center items-center mb-10 md:mb-0 border border-red-500 p-4 md:p-0">
    <div className="text-left "> 
  <h1 className="text-5xl font-bold mb-6">Nothing Beats Fresh!</h1>
  <p className="text-lg mb-6 text-left ">
    At Seafood Center, we take pride in offering the highest quality seafood sourced directly from local fishermen.
    Our commitment to freshness ensures that you'll always enjoy the best flavors and textures in every bite.
  </p>
  <button className="bg-custom-blue text-white rounded-full py-2 px-8 hover:bg-blue-600 transition">
    See Our Offerings
  </button>
  </div>
</div>

    {/* Right Half - Grid Boxes */}
    <div className="md:flex-1 grid grid-cols-2 gap-4">
      {/* Box 1 */}
      <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md border border-gray-200 h-full">
    <img src={icon_fish_2} className="w-24 h-24 mb-4" alt="Fish Icon" />
    <h3 className="font-semibold mb-2 text-center">Sub-Heading 1</h3>
    <p className="text-center">Freshness You Can Taste, Straight from the Ocean</p>
  </div>
  {/* Box 2 */}
  <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md h-full">
    <img src={icon_fish_1} className="w-24 h-24 mb-4" alt="Fish Icon" />
    <h3 className="font-semibold mb-2 text-center">Sub-Heading 1</h3>
    <p className="text-center">Freshness You Can Taste, Straight from the Ocean</p>
  </div>
  {/* Box 3 */}
  <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md h-full">
    <img src={icon_fish_3} className="w-24 h-24 mb-4" alt="Fish Icon" />
    <h3 className="font-semibold mb-2 text-center">Sub-Heading 1</h3>
    <p className="text-center">Freshness You Can Taste, Straight from the Ocean</p>
  </div>
  {/* Box 4 */}
  <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md h-full">
    <img src={icon_fish_2} className="w-24 h-24 mb-4" alt="Fish Icon" />
    <h3 className="font-semibold mb-2 text-center">Sub-Heading 1</h3>
    <p className="text-center">Freshness You Can Taste, Straight from the Ocean</p>
  </div>
    </div>

  </div>
</div>

      
  )
}

export default Offer