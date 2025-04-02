import React from 'react'
import Image from 'next/image';
import { FaCheckCircle } from "react-icons/fa";

const Services = () => {
  return (
    <div className='w-full'>
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
                        <p className='text-[50px] font-bold text-white'>Services</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full flex items-center justify-center lg:pt-30 pt-10 pb-30'>
            <div className='lg:w-[80%] w-[95%] flex flex-col lg:flex-row justify-between'>
                <div className='lg:w-[30%] w-full flex flex-col gap-3'>
                    <div className='w-full lg:h-[50px] h-[70px] flex'>
                        <div className='h-full w-[10%] bg-blue-950'></div>
                        <div className='h-full w-[90%] bg-black pl-2 flex items-center cursor-pointer text-white font-semibold'>
                            <p>Product Development</p>
                        </div>
                    </div>
                    <div className='w-full lg:h-[50px] h-[70px] flex'>
                        <div className='h-full w-[10%] bg-blue-950'></div>
                        <div className='h-full w-[90%] bg-black pl-2 flex items-center cursor-pointer text-white font-semibold'>
                            <p>UI/UX Designing</p>
                        </div>
                    </div>
                    <div className='w-full lg:h-[50px] h-[70px] flex'>
                        <div className='h-full w-[10%] bg-blue-950'></div>
                        <div className='h-full w-[90%] bg-black pl-2 flex items-center cursor-pointer text-white font-semibold'>
                            <p>Digital Marketing</p>
                        </div>
                    </div>
                    <div className='w-full h-[65px] flex'>
                        <div className='h-full w-[10%] bg-blue-950'></div>
                        <div className='h-full w-[90%] bg-black pl-2 flex items-center cursor-pointer text-white font-semibold'>
                            <p>Data Analysis</p>
                        </div>
                    </div>
                    <div className='w-full lg:h-[50px] h-[70px] flex'>
                        <div className='h-full w-[10%] bg-blue-950'></div>
                        <div className='h-full w-[90%] bg-black pl-2 flex items-center cursor-pointer text-white font-semibold'>
                            <p>Data Visualization</p>
                        </div>
                    </div>
                    <div className='w-full h-[300px] relative hidden lg:block'>
                        <Image 
                            className="object-cover rounded-2xl"
                            src="/contact.jpg" 
                            alt="pics"
                            fill
                            priority
                            sizes='fill'
                        />
                        <div className='w-full h-full absolute'>
                            <Image 
                                className="object-cover rounded-2xl"
                                src="/overlay-shape.png" 
                                alt="pics"
                                fill
                                priority
                                sizes='fill'
                            />
                            <p className='text-white font-semibold top-2'>Go Digital</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[65%] w-full flex flex-col gap-4 pt-3 lg:pt-0'>
                    <div className='w-full h-[300px] relative'>
                        <Image 
                            className="object-cover"
                            src="/service.jpg" 
                            alt="pics"
                            fill
                            priority
                            sizes='fill'
                        />
                    </div>
                    <p className='text-[40px] font-bold text-black'>Service Overview</p>
                    <p className='text-gray-500 text-sm'>
                        Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem 
                        ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                        Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem 
                        Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                        ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book.
                    </p>
                    <p className='text-gray-500 text-sm'>
                        When an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                        essentially unchanged.
                    </p>
                    <p className='text-[25px] font-semibold'>Service center</p>
                    <p className='text-gray-500 text-sm'>
                        When an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                        essentially unchanged.
                    </p>

                    <div className='w-full flex flex-col lg:flex-row gap-2'>
                        <div className='lg:w-[50%] w-full lg:h-[50px] h-[70px] pl-2 flex items-center gap-2 border-[1px] border-gray-400'>
                            <FaCheckCircle />
                            <p className='font-bold'>SECURE PAYMENTS</p>
                        </div>
                        <div className='lg:w-[50%] w-full lg:h-[50px] h-[70px] pl-2 flex items-center gap-2 border-[1px] border-gray-400 cursor-default'>
                            <FaCheckCircle />
                            <p className='font-bold'>ACCESSMENTS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services