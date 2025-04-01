import React from 'react'
import Image from 'next/image';
import { RxRocket } from "react-icons/rx";
import { BsDashLg } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <div className='w-full flex relative items-center justify-center bg-white'>
        <div className='lg:w-[80%] w-full flex flex-col-reverse lg:flex-row pt-[100px] pb-[100px]'>
            <div className='lg:w-[50%] w-full'>
                <div className="relative overflow-hidden group">
                    <img 
                        className="w-full h-full object-contain transition-all duration-1000"
                        src="./about-1.jpg" 
                        alt="pics"
                    />
                    
                    {/* Light sweep effect */}
                    <div className="
                        absolute inset-0
                        bg-gradient-to-r from-transparent via-white/30 to-transparent
                        bg-[length:200%_100%] bg-left
                        opacity-0
                        transition-all duration-500 ease-in-out
                        group-hover:opacity-100 group-hover:bg-right
                    "></div>
                </div>
                <div className='w-[200px] rounded-2xl absolute lg:bottom-[30%] bottom-[10%] left-[5%] h-[130px] animate-[drift_6s_ease-in-out_infinite] bg-[#336ae9] flex items-center justify-around'>
                    <RxRocket size={40} className='text-white'/>
                    <div className='w-[flex flex-col items-center justify-center'>
                        <p className='font-bold text-white'>10+</p>
                        <p className='font-bold text-white'>years of</p>
                        <p className='font-bold text-white'>experience</p>
                    </div>
                </div>
                <div className='absolute hidden lg:flex top-[20%] left-[42%] rounded-2xl bg-white p-1'>
                    {/* <img src="./about-2.jpg" className='w-full h-full ' alt="" /> */}
                    <div className="w-[200px] h-[300px] relative overflow-hidden group">
                    <img 
                        className="w-full h-full rounded-2xl transition-all duration-1000"
                        src="./about-2.jpg" 
                        alt="pics"
                    />
                    
                    {/* Light sweep effect */}
                    <div className="
                        absolute inset-0
                        bg-gradient-to-r from-transparent via-white/30 to-transparent
                        bg-[length:200%_100%] bg-left
                        opacity-0
                        transition-all duration-500 ease-in-out
                        group-hover:opacity-100 group-hover:bg-right
                    "></div>
                </div>
                </div>
            </div>
            <div className='lg:w-[50%] w-full flex justify-end'>
                <div className='lg:w-[70%] w-full p-2'>
                    <div className='flex items-center text-[#336ae9] font-semibold'>
                        <p>WHO WE ARE</p>
                        <BsDashLg size={40}/>
                    </div>
                    <div>
                        <p className='font-bold lg:text-[40px] text-[34px] lg:leading-14'>We provide best design Solution in town</p>
                    </div>
                    <div className='pt-4 pb-6'>
                        <p>
                            We provide a diverse array of systems, each tailored to streamline your operations and 
                            enhance productivity. Whether you require assistance with data process automation need.
                        </p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-3'>
                            <FaCheckCircle className='text-[#336ae9]'/>
                            <p>Deliver Perfect Solution for business</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaCheckCircle className='text-[#336ae9]'/>
                            <p>Readily Work With Global Brands solutions.</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaCheckCircle className='text-[#336ae9]'/>
                            <p>Residential Business Installation</p>
                        </div>
                    </div>
                    <div className='flex flex-col bg:flex-row lg:items-center justify-center pt-12 gap-6 lg:gap-3'>
                        <div className='w-full flex items-center gap-2'>
                            <div className='w-[70px] h-[70px] rounded-[50%] bg-blue-400'>
                                {/* <img src="" alt="" /> */}
                            </div>
                            <div className='flex flex-col justify-center'>
                                <p className='font-bold'>Ekele Jerry</p>
                                <p>Founder of company</p>
                            </div>
                        </div>
                        <div>
                            <button className='relative bg-[#336ae9] text-white p-3 cursor-pointer overflow-hidden group'>
                            <span className='relative z-10 text-[15px] font-bold '>EXPLORE NOW</span>
                            <div className='absolute top-0 left-0 w-full h-0 bg-black transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoWeAre