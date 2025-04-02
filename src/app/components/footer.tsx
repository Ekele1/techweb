import React from 'react'
import { GiSpiderWeb } from "react-icons/gi";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='w-full bg-[#0f0c1d] flex items-center justify-center pt-10 md:pt-20'>
        <div className='w-[90%] md:w-[80%] lg:h-[500px] flex flex-col justify-between'>
            <div className='w-full flex flex-col md:flex-row gap-10 md:gap-0 justify-between'>
                {/* Company Info */}
                <div className='w-full md:w-[22%] flex flex-col gap-4'>
                    <div className='w-full flex items-center gap-3'>
                        <GiSpiderWeb size={35} className="text-blue-600" />
                        <p className='text-[18px] md:text-[20px] lg:text-[25px] text-white font-bold'>TechWeb</p>
                    </div>
                    <p className='text-white text-sm'>Desires to obtain pain of itself, because it is pain, but occasionally circumstances.</p>
                    <div className='flex w-full items-center justify-between max-w-[200px]'>
                        <BsTwitterX className='text-[24px] md:text-[30px] text-white'/>
                        <FaSquareInstagram className='text-[24px] md:text-[30px] text-white'/>
                        <FaFacebook className='text-[24px] md:text-[30px] text-white'/>
                    </div>
                </div>

                {/* Explore Links */}
                <div className='w-full md:w-[22%] flex flex-col gap-3'>
                    <p className='text-[18px] md:text-[20px] text-white font-bold'>Explore</p>
                    <div className='w-full bg-gray-200'>
                        <div className='h-[2px] bg-blue-600 w-[20%]'></div>
                    </div>
                    <p className='cursor-pointer text-white hover:text-[#336ae9]'>About Company</p>
                    <p className='cursor-pointer text-white hover:text-[#336ae9]'>Our Projects</p>
                    <p className='cursor-pointer text-white hover:text-[#336ae9]'>Contact</p>
                </div>

                {/* Contact Info */}
                <div className='w-full md:w-[22%] flex flex-col gap-3'>
                    <p className='text-[18px] md:text-[20px] text-white font-bold'>Contact</p>
                    <div className='w-full bg-gray-200'>
                        <div className='h-[2px] bg-blue-600 w-[20%]'></div>
                    </div>
                    <p className='cursor-pointer text-white text-sm md:text-base'>66 Road Broklyn Street, 600 New York, USA</p>
                    <div className='flex items-center gap-3'>
                        <MdMailOutline className='text-blue-600'/>
                        <p className='font-bold text-white text-sm md:text-base'>needhelp@TechWeb.com</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaPhoneAlt className='text-blue-600'/>
                        <p className='font-bold text-white text-sm md:text-base'>+234 (9154382278)</p>
                    </div>
                </div>

                {/* Portfolio Gallery */}
                <div className='w-full md:w-[22%] flex flex-col gap-3'>
                    <p className='text-[18px] md:text-[20px] text-white font-bold'>Portfolio</p>
                    <div className='w-full bg-gray-200'>
                        <div className='h-[2px] bg-blue-600 w-[20%]'></div>
                    </div>
                    <div className='w-full h-[160px] flex flex-col justify-between'>
                        <div className='flex w-full h-[48%] justify-between'>
                            <div className='w-[32%] h-full relative'>
                                <Image sizes='fill' fill className='w-full h-full object-cover' src="/robot.jpg" alt="pic" />
                            </div>
                            <div className='w-[32%] h-full relative'>
                                <Image sizes='fill' fill className='w-full h-full object-cover' src="/board.jpg" alt="pic" />
                            </div>
                            <div className='w-[32%] h-full relative'>
                                <Image sizes='fill' fill className='w-full h-full object-cover' src="/type.jpg" alt="pic" />
                            </div>
                        </div>
                        <div className='flex w-full h-[48%] justify-between'>
                            <div className='w-[32%] h-full relative'>
                                <Image sizes='fill' fill className='w-full h-full object-cover' src="/project-thumb-4.jpg" alt="pic" />
                            </div>
                            <div className='w-[32%] h-full relative'>
                                <Image sizes='fill' fill className='w-full h-full object-cover' src="/project-thumb-5.jpg" alt="pic" />
                            </div>
                            <div className='w-[32%] h-full relative'>
                                <Image sizes='fill' fill className='w-full h-full object-cover' src="/project-thumb-6.jpg" alt="pic" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Copyright */}
            <div className='w-full h-[80px] md:h-[100px] bg-[#07161d] flex items-center justify-center mt-10 md:mt-0'>
                <p className='text-white text-xs md:text-sm text-center px-2'>© Copyright reserved by www.techweb.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer