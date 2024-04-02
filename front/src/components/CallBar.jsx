import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';

import {styles} from '../style';
import { navLinks } from '../constants/index';

const CallBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-30 bg-secondary py-5  item-center border border-red-500`

      }
>
      <div className='w-full flex text-white   max-w-7x1 mx-auto justify-center border-solid border border-red-500 content-center' >
        CALL NOW 415.725.3496
        

      </div>

</nav>
      


  )
}

export default CallBar