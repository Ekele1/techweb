import React from 'react'
import Image from 'next/image';
import { FaCheckCircle } from "react-icons/fa";
import RecentWorks from '../components/recent';

const Page = () => {
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
                        <p className='text-[50px] font-bold text-white'>Project Details</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full min-h-screen flex flex-col items-center justify-center gap-5 lg:pt-30 pt-[30px] pb-[30px] lg:pb-30'>
            <div className='lg:w-[80%] w-full lg:h-[500px] h-[200px] relative'>
                <Image 
                    className="object-cover lg:rounded-3xl"
                    src="/robot1.jpg" 
                    alt="pics"
                    fill
                    priority
                    sizes='fill'
                />
            </div>
            <div className='lg:w-[80%] w-full h-[140px] bg-[#f5f5f5] rounded-2xl flex items-center justify-around'>
                <div>
                    <p className='text-gray-600'>Date</p>
                    <p className='text-black'>10 january, 2023</p>
                </div>
                <div>
                    <p className='text-gray-600'>Client</p>
                    <p className='text-black'>funiro</p>
                </div>
                <div>
                    <p className='text-gray-600'>website</p>
                    <p className='text-black'>www.funiro.com</p>
                </div>
                <div>
                    <p className='text-gray-600'>Location</p>
                    <p className='text-black'>South Africa</p>
                </div>
            </div>
            <div className='lg:w-[80%] w-full pl-2 lg:pl-0'>
                <p className='text-black font-bold text-[20px]'>Here's what to know about this project</p>
            </div>
            <div className='lg:w-[80%] w-[95%] flex flex-col gap-4'>
                <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Asperiores, repellat aliquid. 
                    Est corrupti officiis dignissimos deserunt sunt minima iusto quia saepe tempora consectetur dolor deleniti voluptatum 
                    et, eos vitae pariatur molestiae odit quos enim voluptas nobis ullam voluptatem cum iste. Dolore modi, animi optio, dignissimos 
                    delectus pariatur similique harum eos.
                </p>
                <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Asperiores, repellat aliquid. 
                    Est corrupti officiis dignissimos deserunt sunt minima iusto quia saepe tempora consectetur dolor deleniti voluptatum 
                    et, eos vitae pariatur molestiae odit quos enim voluptas nobis ullam voluptatem cum iste. Dolore modi, animi optio, dignissimos 
                    delectus pariatur similique harum eos.
                </p>
                <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Asperiores, repellat aliquid. 
                    Est corrupti officiis dignissimos deserunt sunt minima iusto quia saepe tempora consectetur dolor deleniti voluptatum 
                    et, eos vitae pariatur molestiae odit quos enim voluptas nobis ullam voluptatem cum iste. Dolore modi, animi optio, dignissimos 
                    delectus pariatur similique harum eos.
                </p>
            </div>
            <div className='lg:w-[80%] w-full pl-2 lg:pl-0'>
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
            </div>
        </div>
        <RecentWorks />
    </div>
  )
}

export default Page