import React from 'react'
import Image from 'next/image';
import { BsDashLg } from "react-icons/bs";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const Page = () => {
  return (
    <div className='w-full bg-white'>
        <div className='w-full h-[300px] relative'>
            <Image 
                className="object-cover"
                src="/service.jpg" 
                alt="pics"
                fill
                priority
                sizes='fill'
            />
            <div className='absolute inset-0'>
                <div className='w-full h-full bg-black opacity-60 flex items-center pl-4'>
                    <div>
                        <p className='text-[50px] font-bold text-white'>Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full flex items-center justify-center'>
            <div className='lg:w-[80%] w-[95%] lg:pt-20 pt-10 lg:pb-20 pb-10 gap-5 lg:gap-0 flex flex-col lg:flex-row'>
                <div className='lg:w-[60%] w-full lg:pr-5'>
                    <div className='flex items-center text-[#336ae9] font-semibold'>
                        <p>SEND US EMAIL</p>
                        <BsDashLg size={40}/>
                    </div>
                    <p className='text-[30px] font-bold text-black'>Feel free to write</p>
                    <div className='w-full pt-7 flex flex-col gap-4'>
                        <div className='w-full flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-between'>
                            <div className='lg:w-[48%] w-full h-[50px]'>
                                <input 
                                placeholder='Enter Name'
                                className='w-full h-full rounded-md outline-blue-400 text-black pl-2 bg-[#f4f5f9]'
                                type="text" />
                            </div>
                            <div className='lg:w-[48%] w-full h-[50px]'>
                                <input 
                                placeholder='Enter Email'
                                className='w-full h-full rounded-md outline-blue-400 text-black pl-2 bg-[#f4f5f9]'
                                type="email" />
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-between'>
                            <div className='lg:w-[48%] w-full h-[50px]'>
                                <input 
                                placeholder='Enter Subject'
                                className='w-full h-full rounded-md outline-blue-400 text-black pl-2 bg-[#f4f5f9]'
                                type="text" />
                            </div>
                            <div className='lg:w-[48%] w-full h-[50px]'>
                                <input 
                                placeholder='Enter Phone'
                                className='w-full h-full rounded-md outline-blue-400 text-black pl-2 bg-[#f4f5f9]'
                                type="phone" />
                            </div>
                        </div>
                        <textarea 
                            className='w-full h-[200px] text-black bg-[#f4f5f9] p-3 rounded-md outline-blue-400'
                            defaultValue="YOUR MESSAGE"
                        />

                        <button className='relative bg-[#336ae9] mt-5 lg:mt-0 text-white pt-4 pb-4 pl-8 pr-8 cursor-pointer overflow-hidden group'>
                            <span className='relative z-10'>SEND</span>
                            <div className='absolute top-0 left-0 w-full h-0 bg-black transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
                      </button>
                    </div>
                </div>
                <div className='lg:w-[40%] w-full lg:pl-5 flex flex-col gap-5'>
                    <div className='flex items-center text-[#336ae9] font-semibold'>
                        <p>NEED ANY HELP</p>
                        <BsDashLg size={40}/>
                    </div>
                    <p className='text-[30px] font-bold text-black'>Get in touch with us</p>
                    <p className='text-sm text-gray-500'>
                        Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis 
                        purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod 
                    </p>
                    <div className='w-full flex gap-5'>
                        <div className='p-6 bg-black hover:bg-blue-600'>
                            <FaPhone color='white'/>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='text-black font-bold'>Have any question?</p>
                            <p className='text-gray-600'>+234 9154382278</p>
                        </div>
                    </div>
                    <div className='w-full flex gap-5'>
                        <div className='p-6 bg-black hover:bg-blue-600'>
                            <MdMailOutline color='white'/>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='text-black font-bold'>Write email</p>
                            <p className='text-gray-600'>needhelp@company.com</p>
                        </div>
                    </div>
                    <div className='w-full flex gap-5'>
                        <div className='p-6 bg-black hover:bg-blue-600'>
                            <FaLocationArrow color='white'/>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p className='text-black font-bold'>Visit anytime</p>
                            <p className='text-gray-600'>flat 3, kekere bus stop, beside z-bet kitchen Ajah lagos Nigeria</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Page