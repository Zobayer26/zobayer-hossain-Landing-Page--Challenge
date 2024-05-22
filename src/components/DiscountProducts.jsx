import discount_img_1 from '../assets/block_1.png'
import discount_img_2 from '../assets/block_2.png'
import discount_img_3 from '../assets/block_3.png'
import discount_img_4 from '../assets/block_4.png'


const DiscountProducts = () => {
  return (
    <section className=" mt-[320px] mx-[240px]">
      <div className="grid grid-cols-2 gap-[35px]">
        <div className="flex flex-col gap-[35px]">
          <div className="h-[633px] relative">
            <img src={discount_img_1} alt="Discount 1" className="h-full w-full object-cover" />
            <div className='w-[483px] h-[225px] rounded-[5px] px-[110px] py-[36px]
             bg-white  absolute bottom-0 left-0 
             translate-x-[80px] -translate-y-[40px]'>
              <div className='flex flex-col  items-center gap-[30px]'>
                <div className='flex flex-col items-center gap-[10px] text-[#383838]'>
                  <h3 className=' text-[25px] leading-[35px] font-[700] '>Bravo Sunglasses</h3>
                  <p className=' text-[20px] leading-[30px] font-[400] '>Up to 80% off on selected item</p>
                </div>
                <button className='px-[40px] py-[11px] bg-[#383838]
                 capitalize text-white rounded-[5px]'>buy now</button>
              </div>
            </div>
          </div>
          <div className="h-[509px] relative">
            <img src={discount_img_3} alt="Discount 3" className="h-full w-full object-cover" />
            <div className='w-[483px] h-[225px] rounded-[5px] px-[110px] py-[36px]
             bg-white  absolute bottom-0 left-0 
             translate-x-[80px] -translate-y-[40px]'>
              <div className='flex flex-col  items-center gap-[30px]'>
                <div className='flex flex-col items-center gap-[10px] text-[#383838]'>
                  <h3 className=' text-[25px] leading-[35px] font-[700] '>Tommy Hilfiger</h3>
                  <p className=' text-[20px] leading-[30px] font-[400] '>Up to 30% off on selected item</p>
                </div>
                <button className='px-[40px] py-[11px] bg-[#383838]
                 capitalize text-white rounded-[5px]'>buy now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[35px]">
          <div className="h-[509px] relative">
            <img src={discount_img_2} alt="Discount 2" className="h-full w-full object-cover" />
            <div className='w-[483px] h-[225px] rounded-[5px] px-[110px] py-[36px]
             bg-white  absolute bottom-0 left-0 
             translate-x-[80px] -translate-y-[40px]'>
              <div className='flex flex-col  items-center gap-[30px]'>
                <div className='flex flex-col items-center gap-[10px] text-[#383838]'>
                  <h3 className=' text-[25px] leading-[35px] font-[700] '>John Jacobs</h3>
                  <p className=' text-[20px] leading-[30px] font-[400] '>Up to 40% off on selected item</p>
                </div>
                <button className='px-[40px] py-[11px] bg-[#383838]
                 capitalize text-white rounded-[5px]'>buy now</button>
              </div>
            </div>
          </div>
          <div className="h-[633px] relative">
            <img src={discount_img_4} alt="Discount 4" className="h-full w-full object-cover" />
            <div className='w-[483px] h-[225px] rounded-[5px] px-[110px] py-[36px]
             bg-white  absolute bottom-0 left-0 
             translate-x-[80px] -translate-y-[40px]'>
              <div className='flex flex-col  items-center gap-[30px]'>
                <div className='flex flex-col items-center gap-[10px] text-[#383838]'>
                  <h3 className=' text-[25px] leading-[35px] font-[700] '>Vincent Chase</h3>
                  <p className=' text-[20px] leading-[30px] font-[400] '>Up to 10% off on selected item</p>
                </div>
                <button className='px-[40px] py-[11px] bg-[#383838]
                 capitalize text-white rounded-[5px]'>buy now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiscountProducts