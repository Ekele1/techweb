import React from 'react'
import Image from 'next/image';

const HeroPage = () => {
  return (
    <div className='relative w-full h-screen'>
        <Image
            src="/s1-1.jpg"
            alt="Background"
            fill
            className="object-cover"
        />
        <div className="absolute inset-0 " />
            <div className="w-full h-screen flex items-center justify-center relative z-5 p-8 text-white">
                <div className='w-[200px] h-[200px] hidden lg:flex bg-[#336ae9] rounded-[50%]  animate-[drift_6s_ease-in-out_infinite]'></div>
                <div className='lg:w-[80%] w-full'>
                    <div className="my-4 flex items-center justify-center">
                        <div className="lg:w-[40%] h-[1px] bg-white"></div>
                        <span className="text-sm text-white px-4">WELCOME TO THE BEST</span>
                        <div className="lg:w-[40%] h-[1px] bg-white"></div>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <p className='lg:text-[70px] text-[35px] font-bold text-white'>Innovative Tech</p>
                        <p className='lg:text-[70px] text-[35px] font-bold text-white'>IT solution</p>
                        <button className='relative bg-[#336ae9] mt-5 lg:mt-0 text-white pt-4 pb-4 pl-8 pr-8 cursor-pointer overflow-hidden group'>
                        <span className='relative z-10'>EXPLORE MORE</span>
                        <div className='absolute top-0 left-0 w-full h-0 bg-black transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
                        </button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default HeroPage