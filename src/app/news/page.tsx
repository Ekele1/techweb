"use client"

import React from 'react'
import Image from 'next/image';
import { FaUser, FaLongArrowAltRight } from "react-icons/fa";
import { FaTag } from "react-icons/fa6"
import { useRouter } from 'next/navigation';

const Page = () => {
    const blogMat = [
        {
            img: "/news-1.jpg",
            admin: "Corporate",
            question: "Does My Website Need Any Blog ?"
        },
        {
            img: "/news-2.jpg",
            admin: "Technology",
            question: "How To Create An Awsome Software"
        },
        {
            img: "/news-3.jpg",
            admin: "Bussiness",
            question: "Why the Biggest Myths About Business"
        }
    ]

    const router = useRouter();

    const handleClick = () => {
        router.push('/newsDetail');
    };
  return (
    <div className='w-full flex flex-col items-center justify-center'>
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
                        <p className='text-[50px] font-bold text-white'>News Grid</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[80%] flex items-center justify-center lg:pt-30 pt-10 lg:pb-30 pb-10'>
            <div className='w-full flex flex-col lg:flex-row justify-between gap-3'>
                {
                    blogMat.map((e,i)=>(
                        <div className='lg:w-[33%] w-full border-[1px] border-gray-300 group' key={i} onClick={handleClick}>
                        <div className="relative h-[200px] w-full overflow-hidden">
                            <Image
                                src={e.img}
                                alt="Background"
                                fill
                                priority
                                sizes='fill'
                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
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
                        <div className='w-full p-4 flex flex-col gap-3'>
                            <div className='w-full flex gap-3'>
                                <div className='flex items-center'>
                                    <FaUser color='blue'/>
                                    <p className='text-sm text-black'>By Admin</p>
                                </div>
                                <div className='flex items-center'>
                                    <FaTag color='blue'/>
                                    <p className='text-sm text-black'>{e.admin}</p>
                                </div>
                            </div>
                            <p className='text-[23px] text-black group-hover:text-[#336ae9] font-bold'>{e.question}</p>
                        </div>
                            
                        <div>
                            <button className='relative w-full bg-[#f4f5f9] flex items-center gap-3 text-white p-3 cursor-pointer overflow-hidden'>
                                <span className='relative z-10 text-[15px] font-bold text-black'>READ MORE</span>
                                <FaLongArrowAltRight color='black'/>
                                <div className='absolute top-0 left-0 w-full h-0 bg-[#336ae9] transition-[height] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:h-full'></div>
                            </button>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Page