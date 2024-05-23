
import { FaCartShopping } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { useState, useEffect } from "react";

const Cart = ({ size, addToCart }) => {

  const [showCart, setShowCart] = useState(false)
  useEffect(() => {
    console.log(addToCart);
  }, [addToCart]);
  return (
    <div>
      <div onClick={() => setShowCart(!showCart)}
        className="relative cursor-pointer">
        <FaCartShopping />
        <div className=" bg-red-500 w-[20px] h-[20px] rounded-full 
            flex justify-center items-center
             absolute -top-[14px] left-1">
          <p className=" text-white">{size}</p>
        </div>
      </div>
      {
        showCart && (
          <div className=" absolute top-20  rounded-xl bg-[#383838] text-white
           shadow-sm backdrop-blur-sm right-0 w-[800px] h-[600px] z-30 ">
            <div className="px-[30px] py-20px">
              {addToCart?.map((product) => (
                <div className="flex justify-between items-center"
                  key={product.id}>
                  <p>{product.id}</p>
                  <div className="w-[200px]">
                    <img className="w-full object-cover"
                      src={product.image} alt="Product_img" />
                  </div>
                  <p>price</p>
                  <div className="flex  items-center gap-[20px] ">
                    <button className=" text-[20px] font-[700] leading-[30px] 
                     border flex justify-center items-center px-[10px]">
                      <p>-</p>
                    </button>
                    <p>
                      Quantity
                    </p>
                    <button className=" text-[20px] font-[700] leading-[30px] 
                     border flex justify-center items-center px-[10px]">
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )
      }
    </div>
  )
}

export default Cart

Cart.propTypes = {
  size: PropTypes.any,
  addToCart: PropTypes.any
};

