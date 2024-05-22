import vector_img from '../assets/Vector.png'


const BuyEasyStep = () => {
  return (
    <section className=" absolute top-0 left-0 translate-x-[292px] translate-y-[959px]
    flex gap-[33px] ">
      <div className='flex'>
        <div className=" flex flex-col  gap-[40px]">
          <div className='flex items-center justify-center '>
            <div className="w-[130px] h-[130px] rounded-full bg-[#FED29C] flex justify-center items-center ">
              <p>icon</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <p className="text-[20px] leading-[30px] font-[700]  text-[#383838] ">Search you sunglass</p>
            <p className="text-[16px] leading-[26px] font-[400] text-[#545454]">Shop Stylish Eyewear Now</p>
          </div>
        </div>
        <div className='mt-[57px]'>
          <img  src={vector_img} alt='' />
        </div>
      </div>
      <div className='flex'>
        <div className=" flex flex-col  gap-[40px]">
          <div className='flex items-center justify-center '>
            <div className="w-[130px] h-[130px] rounded-full bg-[#FED29C] flex justify-center items-center ">
              <p>icon</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <p className="text-[20px] leading-[30px] font-[700]  text-[#383838] ">Select Sunglass </p>
            <p className="text-[16px] leading-[26px] font-[400] text-[#545454]">Shade Your Style</p>
          </div>
        </div>
        <div className='mt-[57px]'>
          <img src={vector_img} alt='' />
        </div>
      </div>
      <div className='flex'>
        <div className=" flex flex-col  gap-[40px]">
          <div className='flex items-center justify-center '>
            <div className="w-[130px] h-[130px] rounded-full bg-[#FED29C] flex justify-center items-center ">
              <p>icon</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <p className="text-[20px] leading-[30px] font-[700]  text-[#383838] ">Make Payment</p>
            <p className="text-[16px] leading-[26px] font-[400] text-[#545454]">Securely Checkout Now</p>
          </div>
        </div>
        <div className='mt-[57px]'>
          <img src={vector_img} alt='' />
        </div>
      </div>

      <div className=" flex flex-col items-center justify-center gap-[40px]">
        <div className="w-[130px] h-[130px] rounded-full bg-[#FED29C] flex justify-center items-center ">
          <p>icon</p>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <p className="text-[20px] leading-[30px] font-[700]  text-[#383838] ">Received Product </p>
          <p className="text-[16px] leading-[26px] font-[400] text-[#545454]">See the World Clearly</p>
        </div>
      </div>
    </section>
  )
}

export default BuyEasyStep