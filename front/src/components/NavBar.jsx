import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';

import {styles} from '../style';
import { navLinks } from '../constants/index';
import {logo_name, menu,close} from './assets'

const Navbar = () => {
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
      className={`sm:px-16 left-0 px-6 w-full flex items-center py-5 fixed top-[50px] z-20 bg-primary  border border-red-500`

      }
>
      <div className='w-full flex justify-between item-center max-w-7x1 mx-auto  border border-red-500 py-2'>
        <Link to="/"
          className = "flex items-center gap-2"
          onClick= {()=> {
            setActive("");
            window.scrollTo(0, 0);
          }}
          >

            <img src={logo_name} alt="logo_name"
            className="w-64 h-auto  border border-red-500 "/>
            
          </Link>

          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((link)=> (
              <li key ={link.id}
              className= {
                `${active === link.title 
                  ? "text-text_hover" 
                  : "text-secondary"
                } hover:text-text_hover text-[18px] font-medium cursor-pointer flex items-center
                `}
                onClick={ () => setActive(link.title) }
              >
              
                <a href={`${link.id}`}>
                  {link.title}

                </a>
                
              </li>
            ))}
            <li className="text-black hover:text-text_hover text-[18px] font-medium cursor-pointer flex items-center">
        <Link to="/ourshop" className="bg-secondary text-white py-2 px-4 hover:text-text_hover rounded-full">
          Our Shop
        </Link>
      </li>
      <li className="text-black hover:text-text_hover text-[18px] font-medium cursor-pointer flex items-center">
        <Link to="/contact" className="bg-secondary text-white  hover:text-text_hover py-2 px-4 rounded-full">
          Contact
        </Link>
      </li>
          </ul>
          
          
          <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4 border border-red-500  '>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-black" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))} 
              <li className=" font-poppins font-medium cursor-pointer text-[16px]">
        <Link to="/ourshop" className=" text-white  hover:text-text_hover ">
          Our Shop
        </Link>
      </li>
      <li className="font-poppins font-medium cursor-pointer text-[16px]">
        <Link to="/contact" className=" text-white  hover:text-text_hover  ">
          Contact
        </Link>
      </li>


                  

            </ul>

            
          </div>

          <div>
            
          </div>

        </div>

      </div>
      

</nav>
      


  )
}

export default Navbar