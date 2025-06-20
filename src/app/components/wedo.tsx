import React from 'react'
import { BsDashLg } from "react-icons/bs";
import { MdOutlineImportantDevices } from "react-icons/md";
import { SiCssdesignawards } from "react-icons/si";
import { MdVideoSettings } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";

const WhatWeDo = () => {
  return (
    <div className='w-full pt-16 pb-16 flex items-center justify-center bg-[#000c1c]'>
        <div className='w-[80%] flex flex-col gap-9'>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='flex items-center justify-center text-[#336ae9] font-semibold'>
                    <p>WHAT WE OFFERING</p>
                    <BsDashLg size={40}/>
                </div>
                <p className='text-white lg:text-[50px] text-[30px] font-bold'>We offer premium services </p>
                <p className='text-white lg:text-[50px] text-[30px]  font-bold'>Exclusively for you.</p>
            </div>
            <div className='w-full flex'>
                <div className='w-full flex flex-col lg:flex-row gap-8 lg:gap-5 items-center justify-between'>
                    <div className='relative lg:w-[25%] w-full h-[300px] hover:cursor-pointer border-[1px] border-white bg-transparent shadow-sm overflow-hidden group'> 
                        {/* Content */}
                        <div className='relative z-10 h-full flex flex-col items-center justify-center'>
                            <div className='flex-1 flex items-center justify-center'>
                                <MdOutlineImportantDevices className='text-white text-[60px] group-hover:text-white transition-all duration-300'/>
                            </div>
                            <div className='pb-5 flex flex-col items-center justify-center gap-3'>
                                <p className='group-hover:text-white transition-all duration-300 text-white font-bold'>Website Development</p>
                                <p className='group-hover:text-white transition-all duration-300 text-white text-[15px]'>Custom-built websites tailored to</p>
                                <p className='group-hover:text-white transition-all duration-300 text-white text-[15px]'>your business needs and goals</p>
                            </div>
                            <div className='w-full pt-4 pb-4 flex items-center justify-center gap-3 text-white font-bold'>
                                <p className=''>Read More</p>
                                <FaLongArrowAltRight />
                            </div>
                        </div>
                        
                        {/* Animated blue background */}
                        <div className='
                            absolute bottom-0 left-0 w-full h-0 bg-[#336ae9] 
                            transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] 
                            group-hover:h-full
                        '></div>
                    </div>
                    <div className='relative lg:w-[25%] w-full h-[300px] hover:cursor-pointer border-[1px] border-white bg-transparent shadow-sm overflow-hidden group'>
                    {/* Content */}
                        <div className='relative z-10 h-full flex flex-col'>
                            <div className='flex-1 flex items-center justify-center'>
                            <SiCssdesignawards className='text-white text-[60px] group-hover:text-white transition-all duration-300'/>
                            </div>
                            <div className='pb-5 flex flex-col items-center justify-center gap-3'>
                                <p className='group-hover:text-white transition-all duration-300 text-white font-bold'>UI/UX Designing</p>
                                <p className='group-hover:text-white transition-all duration-300 text-white text-[15px]'>Beautiful, intuitive interfaces that</p>
                                <p className='group-hover:text-white transition-all duration-300 text-white text-[15px]'>enhance user engagement</p>
                            </div>
                            <div className='w-full pt-4 pb-4 flex items-center justify-center gap-3 text-white font-bold'>
                                <p className=''>Read More</p>
                                <FaLongArrowAltRight />
                            </div>
                        </div>
                        
                        {/* Animated blue background */}
                        <div className='
                            absolute bottom-0 left-0 w-full h-0 bg-[#336ae9] 
                            transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] 
                            group-hover:h-full
                        '></div>
                    </div>
                    <div className='relative lg:w-[25%] w-full h-[300px] hover:cursor-pointer border-[1px] border-white bg-transparent shadow-sm overflow-hidden group'>
                        <div className='relative z-10 h-full flex flex-col'>
                            <div className='flex-1 flex items-center justify-center'>
                            <MdVideoSettings className='text-white text-[60px] group-hover:text-white transition-all duration-300'/>
                            </div>
                            <div className='pb-5 flex flex-col items-center justify-center gap-3'>
                                <p className='group-hover:text-white transition-all duration-300 text-white font-bold'>Digital Marketing</p>
                                <p className='group-hover:text-white transition-all duration-300 text-white text-[15px]'>Strategic campaigns to boost your</p>
                                <p className='group-hover:text-white transition-all duration-300 text-white text-[15px]'>online presence and conversions</p>
                            </div>
                            <div className='w-full pt-4 pb-4 flex items-center justify-center gap-3 text-white font-bold'>
                                <p className=''>Read More</p>
                                <FaLongArrowAltRight />
                            </div>
                        </div>
                        
                        {/* Animated blue background */}
                        <div className='
                            absolute bottom-0 left-0 w-full h-0 bg-[#336ae9] 
                            transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] 
                            group-hover:h-full
                        '></div>
                    </div>
                    <div className='relative lg:w-[25%] w-full h-[300px] hover:cursor-pointer border-[1px] border-white bg-transparent shadow-sm overflow-hidden group'>
                        <div className='relative z-10 h-full flex flex-col'>
                            <div className='flex-1 flex items-center justify-center'>
                            <BsGraphUpArrow className='text-white text-[60px] group-hover:text-white transition-all duration-300'/>
                            </div>
                            <div className='pb-5 flex flex-col items-center justify-center gap-3'>
                                <p className='group-hover:text-white transition-all duration-300 text-white font-bold'>Data Analysis</p>
                                <p className='group-hover:text-white transition-all duration-300 text-white text-[15px]'>Actionable insights from your data</p>
                                <p className='group-hover:text-white transition-all duration-300 text-white text-[15px]'>to drive business decisions</p>
                            </div>
                            <div className='w-full pt-4 pb-4 flex items-center justify-center gap-3 text-white font-bold'>
                                <p className=''>Read More</p>
                                <FaLongArrowAltRight />
                            </div>
                        </div>
                        
                        {/* Animated blue background */}
                        <div className='
                            absolute bottom-0 left-0 w-full h-0 bg-[#336ae9] 
                            transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] 
                            group-hover:h-full
                        '></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo