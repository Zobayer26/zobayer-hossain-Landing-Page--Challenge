
import Oval from '../assets/Oval.png'
import Banner_Image from '../assets/Image.png'
import { FaCartShopping } from "react-icons/fa6";
import icon from '../assets/Icon.png'
import slider from '../assets/Slider.png'


const Banner = () => {
  return (
    <section className='flex flex-col lg:pt-[58px] lg:pb-[98px] lg:pl-[592px] lg:pr-[494px] lg:relative'>
      <div className=' lg:w-[762px] relative'>
        <img src={Oval} alt=" Hero_background_img" />
        <div className=" absolute top-0 left-0 translate-x-[49px] translate-y-[23px]">
          <img src={Banner_Image} alt='Banner_img' />
        </div>
      </div>
      <div className=' w-[400px] lg:w-[556px] flex flex-col gap-[52px]
       absolute  left-0  translate-x-[10%] translate-y-[150%] top-0 md:bottom-0
       md:translate-y-[50%]  lg:translate-x-[240px] lg:translate-y-[315px]'>

        <h1 className='text-[40px] font-[800] lg:text-[54px] lg:leading-[66px]
         lg:font-[700] text-[#383838]'>Personalized Eyeglass Shopping
        </h1>

        <button className='w-[184px] capitalize bg-[#383838] px-[40px] py-[14px]
          text-white flex items-center gap-[10px] rounded-[5px] '>
          <FaCartShopping />
          <p>buy now</p>
        </button>
      </div>
      <div className='hidden md:block absolute top-0 left-0 md:translate-x-[713px] md:translate-y-[550px]'>
        <img src={icon} alt='sunglass' />
      </div>
      <div className=' absolute top-0  right-0 -translate-x-[73px] translate-y-[400px]'>
        <img src={slider} alt='Slider_icon' />
      </div>
    </section>
  )
}

export default Banner