import footer_logo from '../assets/EyeGlass.png'
import { CommunityLink, QuickLink, SupportLink } from "../utils/FooterLinkData"
import { FaLinkedinIn, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="mt-[205px] pl-[244px] pr-[239px] ">
            <div className="flex justify-between">
                <div>
                    <div className='w-[149px] mb-[32px]'>
                        <img src={footer_logo} alt='Footer_logo' className='w-full object-contain' />
                    </div>
                    <div className='w-[349px] mb-[27px]'>
                        <p className=' text-[#383838] font-[400] text-[16px] leading-[26px]'>
                            Latin literature from 45 BC, making it over
                            2000 years old. Richard McClintock, a Latin
                            professor at Hampde
                        </p>
                    </div>
                    <div className='flex items-center gap-[15px]'>
                        <div className='w-[30px] h-[31px] rounded-full border border-[#FED29C] flex justify-center items-center'>
                            <a href=''>
                                <FaLinkedinIn />
                            </a>
                        </div>
                        <div className='w-[30px] h-[31px] rounded-full border border-[#FED29C] flex justify-center items-center'>
                            <a href=''>
                                <FaInstagramSquare />
                            </a>
                        </div>
                        <div className='w-[30px] h-[31px] rounded-full border border-[#FED29C] flex justify-center items-center'>
                            <a href=''>
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className=' text-[20px] leading-[30px] font-[700]
                    mb-[32px] text-[#383838]'>Support</h3>

                    <ul className='flex flex-col gap-[10px]'>
                        {SupportLink.map((Support) => (
                            <li className=' text-[16px] leading-[26px font-[400] text-[#383838] cursor-pointer'
                                key={Support.id}>
                                <a href={Support.path}>
                                    {Support.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className=' text-[20px] leading-[30px] font-[700]
                mb-[32px] text-[#383838]'>Quick Links</h3>
                    <ul className='flex flex-col gap-[10px]'>
                        {QuickLink.map((Quick) => (
                            <li className=' text-[16px] leading-[26px font-[400] text-[#383838]'
                                key={Quick.id}>
                                <a href={Quick.path}>
                                    {Quick.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className=' text-[20px] leading-[30px] font-[700]
                    mb-[32px] text-[#383838]'>Communnity</h3>
                    <ul className='flex flex-col gap-[10px]'>
                        {CommunityLink.map((Community) => (
                            <li className=' text-[16px] leading-[26px font-[400] text-[#383838] '
                                key={Community.id}>
                                <a href={Community.path}>
                                    {Community.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>

        </footer>
    )
}

export default Footer