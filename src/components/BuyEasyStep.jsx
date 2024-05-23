import vector_img from '../assets/Vector.png'
import Search_icon from '../assets/search.png'
import Payment_icon from '../assets/payment.png'
import Delivery_icon from '../assets/delivery.png'
import Sunglass_icon from '../assets/Icon.png'

const BuyEasyStep = () => {
  return (

    <section className='xl:px-[292px] relative top-0 left-0 translate-x-[60px] translate-y-[100px] 
       xl:-translate-y-[120px] grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-4'>
      <div className='flex'>
        <div className=" flex flex-col  gap-[40px]">
          <div className='flex items-center justify-center '>
            <div className="w-[130px] h-[130px] rounded-full bg-[#FED29C] flex justify-center items-center ">
              <img src={Search_icon} alt='Search_icon_img' />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <p className="text-[20px] leading-[30px] font-[700]  text-[#383838] ">Search you sunglass</p>
            <p className="text-[16px] leading-[26px] font-[400] text-[#545454]">Shop Stylish Eyewear Now</p>
          </div>
        </div>
        <div className='hidden xl:block mt-[57px]'>
          <img src={vector_img} alt='' />
        </div>
      </div>
      <div className='flex'>
        <div className=" flex flex-col  gap-[40px]">
          <div className='flex items-center justify-center '>
            <div className="w-[130px] h-[130px] rounded-full bg-[#FED29C] flex justify-center items-center ">
              <img src={Sunglass_icon} alt='Sunglass_icon_img' />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <p className="text-[20px] leading-[30px] font-[700]  text-[#383838] ">Select Sunglass </p>
            <p className="text-[16px] leading-[26px] font-[400] text-[#545454]">Shade Your Style</p>
          </div>
        </div>
        <div className='hidden xl:block mt-[57px]'>
          <img src={vector_img} alt='' />
        </div>
      </div>
      <div className='flex'>
        <div className=" flex flex-col  gap-[40px]">
          <div className='flex items-center justify-center '>
            <div className="w-[130px] h-[130px] rounded-full bg-[#FED29C] flex justify-center items-center ">
              <img src={Payment_icon} alt='Payment_icon_img' />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <p className="text-[20px] leading-[30px] font-[700]  text-[#383838] ">Make Payment</p>
            <p className="text-[16px] leading-[26px] font-[400] text-[#545454]">Securely Checkout Now</p>
          </div>
        </div>
        <div className='hidden xl:block mt-[57px]'>
          <img src={vector_img} alt='' />
        </div>
      </div>

      <div className='flex'>
        <div className=" flex flex-col  gap-[40px]">
          <div className='flex items-center justify-center '>
            <div className="w-[130px] h-[130px] rounded-full bg-[#FED29C] flex justify-center items-center ">
              <img src={Delivery_icon} alt='Delivery_icon_img' />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <p className="text-[20px] leading-[30px] font-[700]  text-[#383838] ">Received Product </p>
            <p className="text-[16px] leading-[26px] font-[400] text-[#545454]">See the World Clearly</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuyEasyStep
