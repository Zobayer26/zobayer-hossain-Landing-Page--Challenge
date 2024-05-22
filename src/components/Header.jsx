import logo from '../assets/Logo.png'
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";


const Header = () => {
  return (
    <header className="flex justify-between items-center
    px-[90px] py-[30px] ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className='flex items-center gap-[30px] capitalize text-[#383838]'>
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
      </div>
    </header>
  )
}

export default Header