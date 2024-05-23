import ProductsData from "../utils/ProductsData"
import { CiHeart } from "react-icons/ci";
import PropTypes from 'prop-types';


const Products = ({ handleCart }) => {


  return (
    <section className=" mt-[147px] 2xl:px-[240px] ">
      <div className="md:px-[40px] xl:px-[100px]">
        <h1 className=" text-center md:text-left xl:text-left text-[#383838] text-[38px] leading-[48px]
       font-[700] mb-[20px] ">Our Products</h1>
        <div className="flex flex-col gap-[20px]  md:flex-row md:justify-between items-center ">
          <p className="text-[#545454] text-[16px] w-[445px] text-center md:text-left
        leading-[26px] font-[400] ">Experience crystal clear vision and elevated style
            with our premium collection of eyeglasses.</p>
          <div className="flex gap-[30px]  text-[16px] leading-[26px] font-[400] text-[#383838]">
            <button>Latest</button>
            <button className="border border-[#545454] rounded-[5px] px-[20px] py-[5px]">Special</button>
            <button>best sell</button>
          </div>
        </div></div>
      <div className="mt-[60px]">
        <div className=" grid grid-cols-1 justify-items-center md:grid-cols-2 2xl:grid-cols-3 xl:gap-x-[35px]  gap-y-[88px]">
          {ProductsData.map((product) => (
            <div
              key={product.id}>
              <div className="w-[417px] md:w-[380px] xl:w-[417px] relative px-[37px] pt-[145px] pb-[115px]">
                <div className="w-[343px]">
                  <img className="w-full object-contain"
                    src={product.image} alt="" />
                </div>
                <div className="w-full absolute top-0 left-0 flex justify-between px-[30px] pt-[30px]">
                  <div className="w-[60px] h-[60px] flex justify-center items-center
             rounded-full bg-[#FED29C]">
                    <p className=" text-[16px] text-[#383838] leading-[23px]
             font-[700]">10%</p>
                  </div>
                  <div className="w-[60px] h-[60px] flex justify-center items-center
             rounded-full border border-[#545454]">
                    <p className="text-[30px]"><CiHeart /></p>
                  </div>
                </div>
              </div>
              <div className="mt-[30px]">
                <h3 className=" text-[30px] leading-[40px] font-[400]
           text-[#383838] mb-[10px]">Bravo Sunglasses</h3>
                <p className="text-[#383838] text-[20px] leading-[30px] font-[700] mb-[20px]">
                  $100
                </p>
                <p onClick={() => handleCart(product)}
                  className="text-[#5A5A5A] cursor-pointer
          text-[20px] leading-[29px] font-[400] underline">Add to cart</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Products

Products.propTypes = {
  handleCart: PropTypes.any,
};
