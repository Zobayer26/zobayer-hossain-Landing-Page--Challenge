import logo from '../assets/Logo.png'
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from 'react';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="flex justify-between items-center 
       px-[30px] md:px-[20px] lg:px-[90px] py-[30px] ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className='hidden md:block '>
        <ul className='flex items-center gap-[15px] lg:gap-[30px] capitalize text-[#383838]'>
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Features</li>
          <li>Reviews</li>
          <li>contact us</li>
        </ul>
      </div>
      <div className='flex items-center gap-[20px]'>
        <FaCartShopping />
        < FaUser />
        <div onClick={() => setIsOpen(!isOpen)}
          className='md:hidden ml-[10px]'>
          < FaBars />
        </div>
      </div>
      {
        isOpen && (
          <div className=' w-full h-screen fixed top-0 left-0 backdrop-blur-sm z-20'>
            <div className={`w-[400px] absolute top-0 right-0
                ${isOpen ? "translate-x-0" : "translate-x-full "} 
                transition-all duration-300 ease-in-out 
             bg-[#383838] min-h-screen `}>
              <div className='flex justify-end mb-[20px]'>
                <div onClick={() => setIsOpen(!open)}
                  className='w-[40px] h-[40px] rounded-full mt-[20px] mr-[20px]
                   flex justify-center items-center hover:border hover:border-white
                      ease-in duration-300 cursor-pointer'>
                  <p className=' text-white text-[20px] font-[600]'>X</p>
                </div>
              </div>
              <div className=' px-[40px] py-[20px] '>
                <ul className=' flex flex-col gap-[30px] text-white text-[22px] 
               capitalize font-[600] cursor-pointer'>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Products</li>
                  <li>Features</li>
                  <li>Reviews</li>
                  <li>contact us</li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    </header>
  )
}

export default Header