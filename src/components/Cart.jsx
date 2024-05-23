
import { FaCartShopping } from "react-icons/fa6";
import PropTypes from 'prop-types';

const Cart = ({size}) => {
    return (
        <div className="relative">
            <FaCartShopping />
            <div className=" bg-red-500 w-[20px] h-[20px] rounded-full 
            flex justify-center items-center
             absolute -top-[14px] left-1">
                <p className=" text-white">{size}</p>
            </div>
        </div>
    )
}

export default Cart

Cart.propTypes = {
    size: PropTypes.any, 
  };
  
