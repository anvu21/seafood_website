import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {styles} from '../style';

const Testimoni = () => {
 
  const testimonials = [
    {
      quote: "The freshest seafood I've ever had!",
      detail: "These food are delicious! Just the perfect serving size. Came back to order more.",
      author: "A.G.",
      stars: 5,
    },
    {
      quote: "Seafood Center is my go-to place for all my seafood needs.",
      detail: "These food are delicious! Just the perfect serving size. Came back to order more.",
      author: "A.G.",
      stars: 5,
    },
    {
      quote: "The quality of their seafood is unmatched.",
      detail: "These food are delicious! Just the perfect serving size. Came back to order more.",
      author: "A.G.",
      stars: 5,
    },
  ];
  

  return (
    
    <div className="bg-gray-100 py-12">
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold mb-2">Customer Testimonials</h2>
      <p className="text-md">Great seafood, excellent service, highly recommended.</p>
    </div>
    <div className="flex justify-center text-center space-x-4">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="max-w-sm p-6 bg-white rounded-lg shadow-md">
          <div className="text-yellow-500 text-lg mb-4">
            {'★'.repeat(testimonial.stars)}
          </div>
          <p className="text-xl font-semibold mb-4">"{testimonial.quote}"</p>
          <p className="mb-4">{testimonial.detail}</p>
          <p className="font-bold">{testimonial.author}</p>
        </div>
      ))}
    </div>
  </div>


  )
}

export default Testimoni