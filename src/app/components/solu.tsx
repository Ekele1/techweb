import React from 'react'
import Image from 'next/image';

const Solution = () => {
  return (
    <div className='w-full h-[500px] relative flex items-center justify-center'>
        <Image fill priority className='w-full h-full object-cover' src="/6amt.jpg" alt="" />
        <div className='absolute w-[95%] h-[95%] border-[1px] border-gray-200 flex flex-col items-center justify-center'>
            <p className='lg:text-[50px] text-[30px] font-bold text-white w-[60%] lg:w-full flex justify-center'>IT Solutions & Services Right</p>
            <p className='lg:text-[50px] text-[30px] font-bold text-white'>At Your Fingertips</p>
            <button className='relative bg-[#336ae9] mt-5 lg:mt-0 text-white pt-3 pb-3 pl-7 pr-7 cursor-pointer overflow-hidden group'>
                <span className='relative z-10'>EXPLORE MORE</span>
                <div className='absolute top-0 left-0 w-full h-0 bg-black transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
            </button>
        </div>
    </div>
  )
}

export default Solution