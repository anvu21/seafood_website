import React from 'react';
// import your image if you have one
// import ImagePlaceholder from 'path-to-your-image';
import { seafood6 } from './assets';
const Who = () => {
    return (
        

        
        <div className="py-12  pt-60">
        <div className="container mx-auto px-4">
          {/* First Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="max-w-md mb-8 md:mb-0">
              <h3 className="text-lg uppercase font-bold mb-2">Who are we?</h3>
              <h2 className="text-3xl font-bold mb-4">The Seafood Center Story</h2>
              <p>
                Seafood Center has always been a small, family-owned shop in San Francisco, dedicated to providing the freshest raw
                and live seafood to the local community. Over the years, it has grown into a beloved institution, known for its quality
                products and commitment to customer satisfaction.
              </p>
            </div>
            <div className="md:w-1/2">
             
             <img src={seafood6} alt="Seafood Plate" className="w-full rounded-lg shadow-lg" />
           </div>
          </div>
  
          {/* Second Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2">
             
              <img src={seafood6} alt="Seafood Plate" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
              <h3 className="text-sm uppercase font-bold text-blue-600 mb-2">Expertise</h3>
              <h2 className="text-3xl font-bold mb-4">Best Seafood In The Area</h2>
              <p className="mb-6">
                At Seafood Center, we take pride in our staff's expertise and their commitment to providing the best seafood in the area. Our
                knowledgeable team is dedicated to guiding our customers with their selection and even cooking methods. With years of experience in the
                industry, we have built a reputation for delivering exceptional products and service. Visit our brick and mortar shop in San Francisco to
                experience the difference of our seafood firsthand.
              </p>
              <button className="bg-custom-blue text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                See Our Offerings
              </button>
            </div>
          </div>
        </div>
      </div>
      );
    };

export default Who;
