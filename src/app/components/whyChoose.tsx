import React from 'react'
import { BsDashLg } from "react-icons/bs";
import { FcIdea } from "react-icons/fc";
import { FaCheckCircle } from "react-icons/fa";
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <div className='w-full h-screen flex flex-col lg:flex-row gap-4'>
        <div className='lg:w-[50%] w-full h-full relative'>
            <Image priority fill sizes='fill' className='w-full h-full object-cover' src="/image-4.jpg" alt="" />  
        </div>
        <div className='lg:w-[50%] w-full h-full flex items-center justify-center'>
            <div className='lg:w-[80%] w-[95%] lg:h-[85%] flex flex-col'>
                <div className='flex text-[#336ae9] font-semibold'>
                    <p>WHY CHOOSE US</p>
                    <BsDashLg size={40}/>
                </div>
                <p className='lg:text-[48px] text-[30px] font-bold leading-[45px]'>Our mission is to provide widespread access</p>
                <p className='mt-6'>Our passionate professionals craft tailored, high-quality systems to meet your unique needs and deliver effective solutions.</p>
                <div className='w-full flex items-center mt-6 gap-5'>
                    <FcIdea className='text-[#336ae9] text-[70px]'/>
                    <p className='font-semibold text-[20px]'>For Your Specific Industry We Have Smart Idea For Business goal.</p>
                </div>
                <div className='flex flex-col gap-3 mt-6'>
                    <div className='flex items-center gap-3'>
                        <FaCheckCircle className='text-[#336ae9]'/>
                        <p>Mounting System for Ground Installation</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaCheckCircle className='text-[#336ae9]'/>
                        <p>Making this the first true generator on the Internet</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaCheckCircle className='text-[#336ae9]'/>
                        <p>Various versions have evolved over the years</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs