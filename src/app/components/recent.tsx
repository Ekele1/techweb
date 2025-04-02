import React from 'react'
import { BsDashLg } from "react-icons/bs";
import Image from 'next/image';

const RecentWorks = () => {
  return (
    <div className='w-full bg-[#f3f4f8] pt-20 pb-20 flex items-center justify-center'>
        <div className='lg:w-[90%] w-[95%] flex flex-col items-center justify-center gap-7'>
            <div className='lg:w-[85%] w-[100%] flex flex-col lg:flex-row gap-3 lg:gap-5'>
                <div className='lg:w-[50%] w-full'>
                    <div className='w-full flex items-center text-[#336ae9] font-semibold'>
                        <p>RECENTLY COMPLETED WORK</p>
                        <BsDashLg size={40}/>
                    </div>
                    <p className='lg:text-[45px] text-[30px] font-bold text-black'>Improve & Enhance the Business Projects</p>
                </div>
                <div className='lg:w-[50%] w-full flex items-center justify-center'>
                    <p className='text-gray-500'>
                        Modern consumers heavily rely on digital platforms to research products before making purchasing 
                        decisions. Studies show that 51% of consumers use Google to research brands.
                    </p>
                </div>
            </div>
            <div className='w-full'>
            {/* Mobile: Single column (1 image) */}
            <div className='flex flex-col gap-4 md:hidden'>
                <div className='w-full h-[370px] bg-blue-400 relative'>
                <Image fill priority sizes='fill' className='w-full h-full object-cover' src="/project-1.jpg" alt="Digital Marketing" />
                <div className='w-full absolute flex flex-col gap-3 items-center justify-center bottom-[10%]'>
                    <p className='text-[25px] text-white font-bold'>Digital Marketing</p>
                    <p className='text-blue-500'>Technology / Marketing</p>
                </div>
                </div>
            </div>

            {/* Medium: Two columns (2 images) */}
            <div className='hidden md:grid md:grid-cols-2 lg:hidden gap-4'>
                <div className='w-full h-[370px] bg-blue-400 relative'>
                <Image fill priority sizes='fill' className='w-full h-full object-cover' src="/project-1.jpg" alt="Digital Marketing" />
                <div className='w-full absolute flex flex-col gap-3 items-center justify-center bottom-[10%]'>
                    <p className='text-[25px] text-white font-bold'>Digital Marketing</p>
                    <p className='text-blue-500'>Technology / Marketing</p>
                </div>
                </div>
                <div className='w-full h-[370px] bg-blue-400 relative'>
                <Image fill priority sizes='fill' className='w-full h-full object-cover' src="./project-2.jpg" alt="Analytic Solution" />
                <div className='w-full absolute flex flex-col gap-3 items-center justify-center bottom-[10%]'>
                    <p className='text-[25px] text-white font-bold'>Analytic Solution</p>
                    <p className='text-blue-500'>Agency / Branding</p>
                </div>
                </div>
            </div>

            {/* Large: Four columns (all images) */}
            <div className='hidden lg:flex lg:items-center lg:justify-between lg:gap-4'>
                {[1, 2, 3, 4].map((item) => (
                <div key={item} className='w-[23%] h-[370px] bg-blue-400 relative'>
                    <Image fill priority sizes='fill' 
                    className='w-full h-full object-cover' 
                    src={`/project-${item}.jpg`} 
                    alt={item === 1 ? "Digital Marketing" : 
                        item === 2 ? "Analytic Solution" : 
                        item === 3 ? "Tech Solution" : "Web"} 
                    />
                    <div className='w-full absolute flex flex-col gap-3 items-center justify-center bottom-[10%]'>
                    <p className='text-[25px] text-white font-bold'>
                        {item === 1 ? "Digital Marketing" : 
                        item === 2 ? "Analytic Solution" : 
                        item === 3 ? "Tech Solution" : "Web"}
                    </p>
                    <p className='text-blue-500'>
                        {item === 1 ? "Technology / Marketing" : 
                        item === 2 ? "Agency / Branding" : 
                        item === 3 ? "Cyberdeck / Promotion" : "Development / HTML"}
                    </p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
    </div>
  )
}

export default RecentWorks