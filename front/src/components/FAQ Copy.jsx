import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {styles} from '../style';
import {icon_fish_1,icon_fish_2,icon_fish_3} from './assets'

const FAQ = () => {
 
    const [activeIndex, setActiveIndex] = useState(null); // Keep track of the active item

    const faqData = [
        {
            question: 'What is the freshness guarantee?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellusorem.',
          },
          {
            question: 'What are your store hours?',
            answer: 'Our store is open from 9 AM to 8 PM on weekdays, and from 10 AM to 6 PM on weekends.',
          },
          {
            question: 'Do you offer wholesale pricing?',
            answer: 'Yes, we offer competitive wholesale pricing for bulk orders. Please contact our sales team for more details.',
          },
          {
            question: 'What is your return policy?',
            answer: 'Our return policy allows you to return products within 30 days of purchase with a valid receipt.',
          },
          {
            question: 'Can I place an order for pickup?',
            answer: 'Absolutely! You can place orders online for in-store pickup at your convenience.',
          },
    ];
  
    const toggleActiveIndex = (index) => {
      setActiveIndex(activeIndex === index ? null : index); // Toggle visibility
    };
  
    return (
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-8 pl-16">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="mb-8">
            Find answers to common questions about seafood selection, preparation, and store policies.
          </p>
          <button className="bg-blue-200 text-blue-700 py-2 px-4 rounded-full">
            Contact
          </button>
        </div>
        <div className="md:w-1/2  p-8">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left py-2 pr-2"
                onClick={() => toggleActiveIndex(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span>{activeIndex === index ? '▲' : '▼'}</span>
              </button>
              <div className={activeIndex === index ? 'block py-4' : 'hidden'}>
                <p>{faq.answer}</p>
              </div>
              {index < faqData.length - 1 && <hr />} {/* Add a line separator except after the last item */}
            </div>
          ))}
        </div>
      </div>
    );
  };

export default FAQ