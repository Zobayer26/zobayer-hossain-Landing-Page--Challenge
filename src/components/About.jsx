import About_img from "../assets/About _img.png"


const About = () => {
  return (
    <section className="mt-[150px] flex flex-col 2xl:flex-row ">
      <div className="px-[90px] py-[60px] xl:py-[126px] xl:pl-[245px] xl:pr-[165px] bg-[#FED29C]  ">
        <div className="max-w-[541px]">
          <h1 className="text-[#383838] text-[30px] md:text-[38px] leading-[48px] font-[700] mb-[20px]">
            Experience clear
            vision with OptiChroma Vision Frames
          </h1>
          <div className="text-[18px] leading-[24px]  md:text-[20px] md:leading-[30px] font-[400] text-[#545454]">
            <p className=" mb-[10px]">
              At OptiChroma, we believe that everyone deserves
              clear vision and stylish eyewear. That&apos;s why we&apos;ve
              designed a collection of frames that prioritize both form and function.</p>
            <p className="mb-[40px]">Our team of
              experts is dedicated to helping you find the perfect pair of glasses.</p>
          </div>
        </div>
        <button className='px-[40px] py-[11px] bg-[#383838]
                 capitalize text-white rounded-[5px]
                  text-[18px] leading-[26px] font-[700]'>about us
        </button>
      </div>
      <div className="hidden md:block h-[616px] 2xl:w-[850px]">
        <img src={About_img} alt="" className="h-full w-full object-cover"/>
      </div>
    </section>
  )
}

export default About