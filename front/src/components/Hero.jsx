import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {styles} from '../style';
import {fish_front} from './assets'

const Hero = () => {
 
  const [windowHeight, setWindowHeight] = useState('850px');
  const navigate = useNavigate();

  useEffect(() => {
    // Set the height based on the window width
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setWindowHeight('750px');
      } else {
        setWindowHeight('850px');
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call the handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative bg-black text-white flex items-center h-screen" style={{ height: windowHeight  }}> {/* Adjust height as needed */}
      <img src={fish_front} alt="Fresh Seafood" className="absolute left-0 top-0 w-full h-full object-cover" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-center h-full">
        <h1 className="text-4xl md:text-5xl max-w-md font-semibold">Live, Fresh, And Local</h1>
        <p className="text-md md:text-lg my-6 max-w-lg">
          We offer a wide selection of fresh and live seafood in San Francisco. Check out our menu to see all of our fresh offerings in store.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black py-2 px-6 rounded-full font-medium hover:bg-gray-300 transition duration-300"
          onClick={() => navigate('/market')}
          >
            
            What We Carry
          </button>
          <button className="bg-transparent border-2 border-white py-2 px-6 rounded-full font-medium hover:bg-white hover:text-black transition duration-300"
          onClick={() => navigate('/market')}>
            Our Offerings
          </button>
        </div>
      </div>
    </div>
      


  )
}

export default Hero